import { Injectable } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { findIndexById } from '../helpers/find-index-by-id';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: Date.now(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: string): Brand {
    const index = findIndexById(this.brands, id);
    return this.brands[index];
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    const index = findIndexById(this.brands, id);
    this.brands[index] = {
      ...this.brands[index],
      ...updateBrandDto,
      updatedAt: Date.now(),
    };
    return this.brands[index];
  }

  remove(id: string): { deleted: Brand } {
    const index = findIndexById(this.brands, id);
    const deleted = this.brands[index];
    this.brands.splice(index, 1);
    return { deleted };
  }

  fillWithSeed(brandsSeed: Brand[]): void {
    this.brands = brandsSeed;
  }
}
