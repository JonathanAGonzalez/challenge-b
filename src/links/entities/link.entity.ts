import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LinkDocument = Link & Document;
@Schema({ timestamps: true })
export class Link {
  @Prop({ isRequired: true })
  url: string;

  @Prop({ default: 0, isRequired: false })
  redirectCount: number;

  @Prop({ isRequired: false })
  maskedUrl: string;

  @Prop({ isRequired: false })
  shortenedUrl: string;

  @Prop({ default: false, isRequired: false })
  isDisabled: boolean;

  @Prop({ isRequired: false })
  expirationDate?: Date;

  @Prop({ isRequired: false })
  password?: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
