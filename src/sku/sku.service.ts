import { Injectable } from '@nestjs/common';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sku, SkuDocument } from './schemas/sku.schema';
import { Model } from 'mongoose';
import { PaginationParams } from './utils/paginationParams';

@Injectable()
export class SkuService {
  constructor(@InjectModel(Sku.name) private skuModel: Model<SkuDocument>) {}

  async create(createSkuDto: CreateSkuDto) {
    return await new this.skuModel(createSkuDto).save();
  }

  async findAll(paginationParams: PaginationParams) {
    return await this.skuModel
      .find(paginationParams?.filter)
      .skip(paginationParams.skip)
      .limit(paginationParams.limit);
  }

  async findOne(id: string) {
    return await this.skuModel.findById(id);
  }

  async update(id: string, updateSkuDto: UpdateSkuDto) {
    return await this.skuModel.findByIdAndUpdate(id, updateSkuDto);
  }

  async remove(id: string) {
    return await this.skuModel.findByIdAndDelete(id);
  }
}
