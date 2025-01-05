import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRotes } from './constants';

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRotes.SEARCH_PRODUCTS, { params: { query } })).data;
};
