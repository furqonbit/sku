import { Module } from '@nestjs/common';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sku, SkuSchema } from './schemas/sku.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sku.name, schema: SkuSchema }])],
  controllers: [SkuController],
  providers: [SkuService],
})
export class SkuModule {}
