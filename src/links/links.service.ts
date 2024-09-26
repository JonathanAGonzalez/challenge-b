import { nanoid } from 'nanoid';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';

import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link.entity';
import { getEnvironment } from 'src/utils/get-environment.util';
import { Environment } from 'src/config/environment.config';

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<Link>) {}

  async create(createLinkDto: CreateLinkDto) {
    const shortenedUrl = nanoid(6);
    const maskedUrl = `${getEnvironment(Environment[process.env.ENVIRONMENT])}/${shortenedUrl}`;
    const createdLink = new this.linkModel({
      ...createLinkDto,
      maskedUrl,
      shortenedUrl,
    });

    try {
      await createdLink.save();

      return {
        maskedUrl,
        isDisabled: createdLink.isDisabled,
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.message,
      };
    }
  }

  async findOne(id: string) {
    return await this.linkModel.findOne({
      shortenedUrl: id,
    });
  }

  async update(id: string, updateLinkDto: UpdateLinkDto) {
    return await this.linkModel.findOneAndUpdate(
      { shortenedUrl: id },
      updateLinkDto,
      {
        new: true,
      },
    );
  }
}
