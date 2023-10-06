import queryString from 'query-string';
import { StudentInterface, StudentGetQueryInterface } from 'interfaces/student';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStudents = async (query?: StudentGetQueryInterface): Promise<PaginatedInterface<StudentInterface>> => {
  return fetcher('/api/students', {}, query);
};

export const createStudent = async (student: StudentInterface) => {
  return fetcher('/api/students', { method: 'POST', body: JSON.stringify(student) });
};

export const updateStudentById = async (id: string, student: StudentInterface) => {
  return fetcher(`/api/students/${id}`, { method: 'PUT', body: JSON.stringify(student) });
};

export const getStudentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/students/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteStudentById = async (id: string) => {
  return fetcher(`/api/students/${id}`, { method: 'DELETE' });
};
