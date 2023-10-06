import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable(),
  school_id: yup.string().nullable().required(),
  teacher_id: yup.string().nullable().required(),
});
