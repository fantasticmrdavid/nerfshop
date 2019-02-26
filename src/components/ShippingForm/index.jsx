import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Collapsible from 'components/Collapsible';
import Cta from 'components/Cta';
import { stateList } from 'data/geo';
import * as styles from './styles';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.boundHandleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { history, submit } = this.props;
    submit(values);
    history.push('/payment');
  }

  render() {
    const { billing, shipping } = this.props;
    const { billingSameAsShipping } = billing;
    const {
      Actions,
      Checkbox,
      CheckboxFieldset,
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
      shipping_firstname: shipping.firstname || null,
      shipping_surname: shipping.surname || null,
      shipping_address1: shipping.address1 || null,
      shipping_address2: shipping.address2 || null,
      shipping_city: shipping.city || null,
      shipping_state: shipping.state || null,
      shipping_postcode: shipping.postcode || null,
      billingSameAsShipping: !(billing.billingSameAsShipping === false),
      billing_firstname: billingSameAsShipping ? shipping.firstname : billing.firstname || null,
      billing_surname: billingSameAsShipping ? shipping.surname : billing.surname || null,
      billing_address1: billingSameAsShipping ? shipping.address1 : billing.address1 || null,
      billing_address2: billingSameAsShipping ? shipping.address2 : billing.address2 || null,
      billing_city: billingSameAsShipping ? shipping.city : billing.city || null,
      billing_state: billingSameAsShipping ? shipping.state : billing.state || null,
      billing_postcode: billingSameAsShipping ? shipping.postcode : billing.postcode || null,
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, action) => this.boundHandleSubmit(values, action)}
        render={(props) => {
          const {
            handleBlur,
            handleChange,
            handleSubmit,
            submitForm,
            values,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <HeadingContainer>
                <Heading><FontAwesomeIcon icon={faAngleRight} /> Shipping Address</Heading>
              </HeadingContainer>
              <Section sectionNo={1}>
                <Fieldset>
                  <Label htmlFor="shipping_firstname">First Name</Label>
                  <Input name="shipping_firstname" type="text" onBlur={handleBlur} onChange={handleChange} value={values.shipping_firstname} required />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_surname">Surname</Label>
                  <Input name="shipping_surname" onBlur={handleBlur} onChange={handleChange} value={values.shipping_surname} type="text" required />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_address1">Street Address</Label>
                  <Input name="shipping_address1" onBlur={handleBlur} onChange={handleChange} value={values.shipping_address1} type="text" required />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_address2">Unit/Suite/Apt no. etc (optional)</Label>
                  <Input name="shipping_address2" onBlur={handleBlur} onChange={handleChange} value={values.shipping_address2} type="text" />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="shipping_city">Suburb/City</Label>
                  <Input name="shipping_city" onBlur={handleBlur} onChange={handleChange} value={values.shipping_city} type="text" />
                </Fieldset>
                <SplitFieldset>
                  <Fieldset>
                    <Label htmlFor="shipping_state">State</Label>
                    <Select name="shipping_state" onBlur={handleBlur} onChange={handleChange} placeholder="--- Select ---" value={values.shipping_state}>
                      <option value={null} disabled>--- Select ---</option>
                      { stateList.map(s => <option key={`shipping_state_select_${s}`} value={s}>{s}</option>) }
                    </Select>
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="shipping_postcode">Postcode</Label>
                    <Input name="shipping_postcode" onBlur={handleBlur} onChange={handleChange} value={values.shipping_postcode} type="text" />
                  </Fieldset>
                </SplitFieldset>
              </Section>

              <HeadingContainer>
                <Heading><FontAwesomeIcon icon={faAngleRight} /> Billing Address</Heading>
                <CheckboxFieldset>
                  <Checkbox name="billingSameAsShipping" onBlur={handleBlur} onChange={handleChange} type="checkbox" checked={values.billingSameAsShipping} />
                  <Label htmlFor="billingSameAsShipping">Same as Shipping Address</Label>
                </CheckboxFieldset>
              </HeadingContainer>
              <Collapsible active={!values.billingSameAsShipping}>
                <Section sectionNo={2}>
                  <Fieldset>
                    <Label htmlFor="billing_firstname">First Name</Label>
                    <Input name="billing_firstname" onBlur={handleBlur} onChange={handleChange} value={values.billing_firstname} type="text" required />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_surname">Surname</Label>
                    <Input name="billing_surname" onBlur={handleBlur} onChange={handleChange} value={values.billing_surname} type="text" required />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_address1">Street Address</Label>
                    <Input name="billing_address1" onBlur={handleBlur} onChange={handleChange} value={values.billing_address1} type="text" required />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_address2">Unit/Suite/Apt no. etc (optional)</Label>
                    <Input name="billing_address2" onBlur={handleBlur} onChange={handleChange} value={values.billing_address2} type="text" />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="billing_city">Suburb/City</Label>
                    <Input name="billing_city" onBlur={handleBlur} onChange={handleChange} value={values.billing_city} type="text" />
                  </Fieldset>
                  <SplitFieldset>
                    <Fieldset>
                      <Label htmlFor="billing_state">State</Label>
                      <Select name="billing_state" onBlur={handleBlur} onChange={handleChange} placeholder="--- Select ---" value={values.billing_state}>
                        <option value={null} disabled>--- Select ---</option>
                        { stateList.map(s => <option key={`billing_state_select_${s}`} value={s}>{s}</option>) }
                      </Select>
                    </Fieldset>
                    <Fieldset>
                      <Label htmlFor="billing_postcode">Postcode</Label>
                      <Input name="billing_postcode" onBlur={handleBlur} onChange={handleChange} value={values.billing_postcode} type="text" />
                    </Fieldset>
                  </SplitFieldset>
                </Section>
              </Collapsible>
              <Actions>
                <Cta to="/checkout">Back</Cta>
                <Cta primary onClick={submitForm}>Enter Payment Details</Cta>
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
  history: PropTypes.object.isRequired,
  shipping: PropTypes.object,
  submit: PropTypes.func.isRequired,
};

export default withRouter(ShippingForm);
