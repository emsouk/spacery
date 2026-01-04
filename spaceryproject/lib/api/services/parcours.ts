import { apiClient } from '../client';
import { Parcours } from '../types';

export const parcoursService = {
  getAll: () => apiClient.get<Parcours[]>('/api/parcours'),
  
  getById: (id: number) => apiClient.get<Parcours>(`/api/parcours/${id}`),
  
  create: (data: Partial<Parcours>) => 
    apiClient.post<{ message: string; parcours: Parcours }>('/api/parcours', data),
  
  update: (id: number, data: Partial<Parcours>) => 
    apiClient.put<{ message: string; parcours: Parcours }>(`/api/parcours/${id}`, data),
  
  delete: (id: number) => apiClient.delete<{ message: string }>(`/api/parcours/${id}`),
};