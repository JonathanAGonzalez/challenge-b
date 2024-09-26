import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './entities/link.entity';

@Module({
  controllers: [LinksController],
  providers: [LinksService],
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
})
export class LinksModule {}
