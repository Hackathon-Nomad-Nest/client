//@TODO: this is just a sample page for the validations

import * as yup from 'yup';

const validationSchema = () =>
  yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string(),
  });

export { validationSchema };
