import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your email address.'),
});
