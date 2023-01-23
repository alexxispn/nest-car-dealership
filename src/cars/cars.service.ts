import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/cars.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { findIndexById } from '../helpers/find-index-by-id';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Ford', model: 'Fusion Hybrid' },
    { id: uuid(), brand: 'Tesla', model: 'Model S' },
    { id: uuid(), brand: 'Toyota', model: 'Prius' },
  ];

  findAll(): Car[] {
    return this.cars;
  }

  findOneById(id: string): Car {
    const index = findIndexById(this.cars, id);
    return this.cars[index];
  }

  create(createCarDto: CreateCarDto): Car {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }

  updateById(id: string, updateCarDto: UpdateCarDto): Car {
    const index = findIndexById(this.cars, id);
    this.cars[index] = { ...this.cars[index], ...updateCarDto };
    return this.cars[index];
  }

  deleteById(id: string): { deleted: Car } {
    const index = findIndexById(this.cars, id);
    const deleted = this.cars[index];
    this.cars.splice(index, 1);
    return { deleted };
  }
}
