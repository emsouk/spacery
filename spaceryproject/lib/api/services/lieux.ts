import { apiClient } from '../client';
import { Lieu } from '../types';

export const lieuxService = {
  getAll: () => apiClient.get<Lieu[]>('/api/lieux'),
  
  getById: (id: number) => apiClient.get<Lieu>(`/api/lieux/${id}`),
  
};