import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populate() {
    this.carsService.fillWithSeed(CARS_SEED);
    this.brandsService.fillWithSeed(BRANDS_SEED);
    return 'Seed has been populated';
  }
}
