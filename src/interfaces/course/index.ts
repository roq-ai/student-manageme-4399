import { SchoolInterface } from 'interfaces/school';
import { TeacherInterface } from 'interfaces/teacher';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  school_id: string;
  teacher_id: string;
  name?: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  school?: SchoolInterface;
  teacher?: TeacherInterface;
  _count?: {};
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  school_id?: string;
  teacher_id?: string;
  name?: string;
  description?: string;
}
