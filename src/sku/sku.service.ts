import { BadRequestException, Injectable } from '@nestjs/common';
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
    try {
      return await new this.skuModel(createSkuDto).save();
    } catch (error) {
      throw new BadRequestException('Data cannot be processed');
    }
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
    try {
      return await this.skuModel.findByIdAndUpdate(id, updateSkuDto);
    } catch (error) {
      throw new BadRequestException('Data cannot be processed');
    }
  }

  async remove(id: string) {
    return await this.skuModel.findByIdAndDelete(id);
  }
}
