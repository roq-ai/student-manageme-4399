import queryString from 'query-string';
import { CourseInterface, CourseGetQueryInterface } from 'interfaces/course';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCourses = async (query?: CourseGetQueryInterface): Promise<PaginatedInterface<CourseInterface>> => {
  return fetcher('/api/courses', {}, query);
};

export const createCourse = async (course: CourseInterface) => {
  return fetcher('/api/courses', { method: 'POST', body: JSON.stringify(course) });
};

export const updateCourseById = async (id: string, course: CourseInterface) => {
  return fetcher(`/api/courses/${id}`, { method: 'PUT', body: JSON.stringify(course) });
};

export const getCourseById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/courses/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCourseById = async (id: string) => {
  return fetcher(`/api/courses/${id}`, { method: 'DELETE' });
};
