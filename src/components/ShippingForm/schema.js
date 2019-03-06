import * as Yup from 'yup';

const contact = {
  email: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your email address.'),
};

const billing = {
  billing_firstname: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your first name.'),
  billing_surname: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your surname.'),
  billing_address1: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your billing street address.'),
  billing_city: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your billing address city/suburb.'),
  billing_state: Yup.string()
    .min(2, 'Please select state')
    .required('Please select your billing address state.'),
  billing_postcode: Yup.string()
    .matches(/(?<!\d)\d{4}(?!\d)/, 'Please enter a valid postcode')
    .required('Please enter your billing address postcode.'),
};

const shipping = {
  shipping_firstname: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your first name.'),
  shipping_surname: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your surname.'),
  shipping_address1: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your shipping street address.'),
  shipping_city: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please enter your billing address city/suburb.'),
  shipping_state: Yup.string()
    .min(2, 'Please select state')
    .required('Please enter your billing address state.'),
  shipping_postcode: Yup.string()
    .matches(/(?<!\d)\d{4}(?!\d)/, 'Please enter a valid postcode')
    .required('Please enter your shipping address postcode.'),
};

const mandatory = {
  ...contact,
  ...shipping,
};

export default billingSameAsShipping => Yup.object().shape(billingSameAsShipping ? mandatory : { ...mandatory, ...billing });
