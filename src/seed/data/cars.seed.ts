import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/interfaces/cars.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro',
  },
  {
    id: uuid(),
    brand: 'Dodge',
    model: 'Challenger',
  },
];
