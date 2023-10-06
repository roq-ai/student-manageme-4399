import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  user_id: string;
  school_id: string;
  subject?: string;
  hire_date?: any;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {
    course?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  school_id?: string;
  subject?: string;
}
