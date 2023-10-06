import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  subject: yup.string().nullable(),
  hire_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
