import { Ingredient } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRotes } from './constants';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRotes.INGREDIENTS)).data;
};
