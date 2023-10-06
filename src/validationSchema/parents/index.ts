import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  relation: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});
