import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkuDocument = Sku & Document;

@Schema()
export class Sku {
  @Prop({ required: true, unique: true })
  sku: string;

  @Prop({ required: true })
  item_name: string;

  @Prop({ required: true })
  product_name: string;
}

export const SkuSchema = SchemaFactory.createForClass(Sku);
