import queryString from 'query-string';
import { ParentInterface, ParentGetQueryInterface } from 'interfaces/parent';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getParents = async (query?: ParentGetQueryInterface): Promise<PaginatedInterface<ParentInterface>> => {
  return fetcher('/api/parents', {}, query);
};

export const createParent = async (parent: ParentInterface) => {
  return fetcher('/api/parents', { method: 'POST', body: JSON.stringify(parent) });
};

export const updateParentById = async (id: string, parent: ParentInterface) => {
  return fetcher(`/api/parents/${id}`, { method: 'PUT', body: JSON.stringify(parent) });
};

export const getParentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/parents/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteParentById = async (id: string) => {
  return fetcher(`/api/parents/${id}`, { method: 'DELETE' });
};
