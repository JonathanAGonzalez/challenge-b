import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  Res,
  Put,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { Response } from 'express';
@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  create(
    @Body() createLinkDto: CreateLinkDto,
    @Query('password') password?: string,
  ) {
    const { url } = createLinkDto;
    const payload = { ...createLinkDto };

    if (!url) {
      throw new BadRequestException('URL is required');
    }

    if (password && password.trim() === '') {
      throw new BadRequestException('Password cannot be empty');
    }

    payload.password = password;

    return this.linksService.create(payload);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() res: Response,
    @Query('password') password?: string,
  ) {
    if (!id) {
      throw new BadRequestException('ID is required');
    }

    const linkFound = await this.linksService.findOne(id).catch(() => {
      throw new NotFoundException('Link not found');
    });

    if (linkFound.isDisabled) {
      throw new NotFoundException('Link is disabled');
    }

    if (password && password !== linkFound.password) {
      throw new BadRequestException({
        statusCode: 401,
        message: 'Invalid password',
      });
    }

    const currentDate = new Date();
    if (linkFound.expirationDate && currentDate > linkFound.expirationDate) {
      throw new NotFoundException('Link has expired');
    }

    linkFound.redirectCount += 1;
    await linkFound.save();

    res.redirect(linkFound.url);
  }

  @Get(':id/stats')
  async stats(@Param('id') id: string) {
    if (!id) {
      throw new BadRequestException('ID is required');
    }

    try {
      const linkFound = await this.linksService.findOne(id);

      return {
        statusCode: 200,
        data: {
          redirectCount: linkFound.redirectCount,
          isDisabled: linkFound.isDisabled,
        },
      };
    } catch (error: any) {
      throw new BadRequestException({
        statusCode: 404,
        message: 'Link not found',
        error: error.message,
      });
    }
  }

  @Put(':id')
  async update(@Param('id') id: string) {
    try {
      const linkFound = await this.linksService.update(id, {
        isDisabled: true,
      });

      if (!linkFound) {
        throw new BadRequestException('Link not found');
      }

      return {
        statusCode: 200,
        message: 'Link disabled',
      };
    } catch (error) {
      throw new BadRequestException({
        statusCode: 404,
        message: 'Link not found',
        error: error.message,
      });
    }
  }
}
