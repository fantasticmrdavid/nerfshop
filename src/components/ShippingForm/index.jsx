import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Collapsible from 'components/Collapsible';
import Cta from 'components/Cta';
import { stateList } from 'data/geo';
import getSchema from './schema';
import * as styles from './styles';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.boundHandleSubmit = this.handleSubmit.bind(this);
    this.boundSetCurrentBillingSameAsShipping = this.setCurrentBillingSameAsShipping.bind(this);
    const { billing } = props;
    const { billingSameAsShipping } = billing;
    this.state = {
      currentBillingSameAsShipping: billingSameAsShipping,
    };
  }

  setCurrentBillingSameAsShipping(e) {
    this.setState({ currentBillingSameAsShipping: e.target.checked });
  }

  handleSubmit(values) {
    const { history, submit } = this.props;
    submit(values);
    history.push('/checkout/payment');
  }

  render() {
    const { billing, contactDetails, shipping } = this.props;
    const { billingSameAsShipping } = billing;
    const { currentBillingSameAsShipping } = this.state;
    const {
      Actions,
      Checkbox,
      CheckboxFieldset,
      Error,
      Fieldset,
      Heading,
      HeadingContainer,
      Input,
      Label,
      Select,
      Section,
      SplitFieldset,
    } = styles;

    const initialValues = {
      email: contactDetails.email || '',
      shipping_firstname: shipping.firstname || '',
      shipping_surname: shipping.surname || '',
      shipping_address1: shipping.address1 || '',
      shipping_address2: shipping.address2 || '',
      shipping_city: shipping.city || '',
      shipping_state: shipping.state || '',
      shipping_postcode: shipping.postcode || '',
      billingSameAsShipping: !(billing.billingSameAsShipping === false),
      billing_firstname: billingSameAsShipping ? shipping.firstname : billing.firstname || '',
      billing_surname: billingSameAsShipping ? shipping.surname : billing.surname || '',
      billing_address1: billingSameAsShipping ? shipping.address1 : billing.address1 || '',
      billing_address2: billingSameAsShipping ? shipping.address2 : billing.address2 || '',
      billing_city: billingSameAsShipping ? shipping.city : billing.city || '',
      billing_state: billingSameAsShipping ? shipping.state : billing.state || '',
      billing_postcode: billingSameAsShipping ? shipping.postcode : billing.postcode || '',
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, action) => this.boundHandleSubmit(values, action)}
        validationSchema={getSchema(currentBillingSameAsShipping)}
        render={(props) => {
          const {
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            submitForm,
            touched,
            values,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <HeadingContainer>
                <Heading><FontAwesomeIcon icon={faAngleRight} /> Contact Details</Heading>
              </HeadingContainer>
              <Section sectionNo={1}>
                <Fieldset>
                  <Label htmlFor="email" error={!!errors.email}>Your Email</Label>
                  { errors.email && touched.email && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.email}</Error> }
                  <Input name="email" type="email" onBlur={handleBlur} onChange={handleChange} value={values.email} required />
                </Fieldset>
              </Section>
              <HeadingContainer>
                <Heading><FontAwesomeIcon icon={faAngleRight} /> Shipping Address</Heading>
              </HeadingContainer>
              <Section sectionNo={2}>
                <Fieldset>
                  <Label htmlFor="shipping_firstname" error={!!errors.shipping_firstname}>First Name</Label>
                  { errors.shipping_firstname && touched.shipping_firstname && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.shipping_firstname}</Error> }
                  <Input name="shipping_firstname" type="text" onBlur={handleBlur} onChange={handleChange} value={values.shipping_firstname} required />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_surname" error={!!errors.shipping_surname}>Surname</Label>
                  { errors.shipping_surname && touched.shipping_surname && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.shipping_surname}</Error> }
                  <Input name="shipping_surname" onBlur={handleBlur} onChange={handleChange} value={values.shipping_surname} type="text" required />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_address1" error={!!errors.shipping_address1}>Street Address</Label>
                  { errors.shipping_address1 && touched.shipping_address1 && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.shipping_address1}</Error> }
                  <Input name="shipping_address1" onBlur={handleBlur} onChange={handleChange} value={values.shipping_address1} type="text" required />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_address2">Unit/Suite/Apt no. etc (optional)</Label>
                  <Input name="shipping_address2" onBlur={handleBlur} onChange={handleChange} value={values.shipping_address2} type="text" />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_city" error={!!errors.shipping_city}>Suburb/City</Label>
                  { errors.shipping_city && touched.shipping_city && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.shipping_city}</Error> }
                  <Input name="shipping_city" onBlur={handleBlur} onChange={handleChange} value={values.shipping_city} type="text" />
                </Fieldset>
                <SplitFieldset>
                  <Fieldset>
                    <Label htmlFor="shipping_state" error={!!errors.shipping_state}>State</Label>
                    { errors.shipping_state && touched.shipping_state && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.shipping_state}</Error> }
                    <Select name="shipping_state" onBlur={handleBlur} onChange={handleChange} placeholder="--- Select ---" value={values.shipping_state}>
                      <option value={null} disabled>--- Select ---</option>
                      { stateList.map(s => <option key={`shipping_state_select_${s}`} value={s}>{s}</option>) }
                    </Select>
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="shipping_postcode" error={!!errors.shipping_postcode}>Postcode</Label>
                    { errors.shipping_postcode && touched.shipping_postcode && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.shipping_postcode}</Error> }
                    <Input name="shipping_postcode" onBlur={handleBlur} onChange={handleChange} value={values.shipping_postcode} type="text" />
                  </Fieldset>
                </SplitFieldset>
              </Section>

              <HeadingContainer>
                <Heading><FontAwesomeIcon icon={faAngleRight} /> Billing Address</Heading>
                <CheckboxFieldset>
                  <Checkbox
                    name="billingSameAsShipping"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      this.boundSetCurrentBillingSameAsShipping(e);
                    }}
                    type="checkbox"
                    checked={values.billingSameAsShipping}
                  />
                  <Label htmlFor="billingSameAsShipping">Same as Shipping Address</Label>
                </CheckboxFieldset>
              </HeadingContainer>
              <Collapsible active={!values.billingSameAsShipping}>
                <Section sectionNo={3}>
                  <Fieldset>
                    <Label htmlFor="billing_firstname" error={!!errors.billing_firstname}>First Name</Label>
                    { errors.billing_firstname && touched.billing_firstname && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.billing_firstname}</Error> }
                    <Input name="billing_firstname" onBlur={handleBlur} onChange={handleChange} value={values.billing_firstname} type="text" required />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_surname" error={!!errors.billing_surname}>Surname</Label>
                    { errors.billing_surname && touched.billing_surname && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.billing_surname}</Error> }
                    <Input name="billing_surname" onBlur={handleBlur} onChange={handleChange} value={values.billing_surname} type="text" required />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_address1" error={!!errors.billing_address1}>Street Address</Label>
                    { errors.billing_address1 && touched.billing_address1 && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.billing_address1}</Error> }
                    <Input name="billing_address1" onBlur={handleBlur} onChange={handleChange} value={values.billing_address1} type="text" required />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_address2">Unit/Suite/Apt no. etc (optional)</Label>
                    <Input name="billing_address2" onBlur={handleBlur} onChange={handleChange} value={values.billing_address2} type="text" />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_city" error={!!errors.billing_city}>Suburb/City</Label>
                    { errors.billing_city && touched.billing_city && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.billing_city}</Error> }
                    <Input name="billing_city" onBlur={handleBlur} onChange={handleChange} value={values.billing_city} type="text" />
                  </Fieldset>
                  <SplitFieldset>
                    <Fieldset>
                      <Label htmlFor="billing_state" error={!!errors.billing_state}>State</Label>
                      { errors.billing_state && touched.billing_state && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.billing_state}</Error> }
                      <Select name="billing_state" onBlur={handleBlur} onChange={handleChange} placeholder="--- Select ---" value={values.billing_state}>
                        <option value={null} disabled>--- Select ---</option>
                        { stateList.map(s => <option key={`billing_state_select_${s}`} value={s}>{s}</option>) }
                      </Select>
                    </Fieldset>
                    <Fieldset>
                      <Label htmlFor="billing_postcode" error={!!errors.billing_postcode}>Postcode</Label>
                      { errors.billing_postcode && touched.billing_postcode && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.billing_postcode}</Error> }
                      <Input name="billing_postcode" onBlur={handleBlur} onChange={handleChange} value={values.billing_postcode} type="text" />
                    </Fieldset>
                  </SplitFieldset>
                </Section>
              </Collapsible>
              <Actions>
                <Cta to="/checkout">Back</Cta>
                <Cta primary onClick={submitForm}>To Payment</Cta>
              </Actions>
            </form>
          );
        }}
      />
    );
  }
}

ShippingForm.propTypes = {
  billing: PropTypes.object,
  contactDetails: PropTypes.object,
  history: PropTypes.object.isRequired,
  shipping: PropTypes.object,
  submit: PropTypes.func.isRequired,
};

export default withRouter(ShippingForm);
