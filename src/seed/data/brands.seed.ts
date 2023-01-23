import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Ford',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Dodge',
    createdAt: Date.now(),
  },
];
