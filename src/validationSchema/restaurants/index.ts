import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description_update: yup.string().nullable(),
  name_update: yup.string().required(),
  user_id_update: yup.string().nullable().required(),
});
