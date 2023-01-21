import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/cars.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), make: 'Ford', model: 'Fusion Hybrid' },
    { id: uuid(), make: 'Tesla', model: 'Model S' },
    { id: uuid(), make: 'Toyota', model: 'Prius' },
  ];

  findAll(): Car[] {
    return this.cars;
  }

  findOneById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID "${id}" not found.`);
    return car;
  }

  create(createCarDto: CreateCarDto): Car {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }

  updateById(id: string, updateCarDto: UpdateCarDto): Car {
    const car = this.findOneById(id);
    const updatedCar = { ...car, ...updateCarDto };
    this.cars = this.cars.map((car) => (car.id === id ? updatedCar : car));
    return updatedCar;
  }

  deleteById(id: string): { deleted: Car } {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { deleted: car };
  }
}
