import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  grade: yup.number().integer().nullable(),
  enrollment_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
