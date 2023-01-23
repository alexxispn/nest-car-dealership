import { NotFoundException } from '@nestjs/common';

export const findIndexById = (collection: any[], id: string): number => {
  const index = collection.findIndex((item) => item.id === id);
  if (index === -1)
    throw new NotFoundException(`The item with id ${id} was not found`);
  return index;
};
