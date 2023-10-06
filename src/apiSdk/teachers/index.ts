import queryString from 'query-string';
import { TeacherInterface, TeacherGetQueryInterface } from 'interfaces/teacher';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTeachers = async (query?: TeacherGetQueryInterface): Promise<PaginatedInterface<TeacherInterface>> => {
  return fetcher('/api/teachers', {}, query);
};

export const createTeacher = async (teacher: TeacherInterface) => {
  return fetcher('/api/teachers', { method: 'POST', body: JSON.stringify(teacher) });
};

export const updateTeacherById = async (id: string, teacher: TeacherInterface) => {
  return fetcher(`/api/teachers/${id}`, { method: 'PUT', body: JSON.stringify(teacher) });
};

export const getTeacherById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/teachers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTeacherById = async (id: string) => {
  return fetcher(`/api/teachers/${id}`, { method: 'DELETE' });
};
