import { apiClient } from '../client';
import { Lieu } from '../types';

export const lieuxService = {
  getAll: () => apiClient.get<Lieu[]>('/api/lieux'),
  
  getById: (id: number) => apiClient.get<Lieu>(`/api/lieux/${id}`),
  
  create: (data: Partial<Lieu>) => apiClient.post<{ message: string; lieu: Lieu }>('/api/lieux', data),
  
  update: (id: number, data: Partial<Lieu>) => 
    apiClient.put<{ message: string; lieu: Lieu }>(`/api/lieux/${id}`, data),
  
  delete: (id: number) => apiClient.delete<{ message: string }>(`/api/lieux/${id}`),
};