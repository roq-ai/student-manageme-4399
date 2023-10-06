import queryString from 'query-string';
import { SchoolInterface, SchoolGetQueryInterface } from 'interfaces/school';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSchools = async (query?: SchoolGetQueryInterface): Promise<PaginatedInterface<SchoolInterface>> => {
  return fetcher('/api/schools', {}, query);
};

export const createSchool = async (school: SchoolInterface) => {
  return fetcher('/api/schools', { method: 'POST', body: JSON.stringify(school) });
};

export const updateSchoolById = async (id: string, school: SchoolInterface) => {
  return fetcher(`/api/schools/${id}`, { method: 'PUT', body: JSON.stringify(school) });
};

export const getSchoolById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/schools/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSchoolById = async (id: string) => {
  return fetcher(`/api/schools/${id}`, { method: 'DELETE' });
};
