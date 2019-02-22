import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { stateList } from 'data/geo';
import * as styles from '../styles';

const ShippingForm = () => {
  const {
    CheckboxFieldset,
    Fieldset,
    FieldInput,
    FieldLabel,
    FieldSelect,
    FormHeading,
    FormSection,
    FullSpanFieldset,
    SplitFieldset,
  } = styles;
  return (
    <form>
      <FormSection sectionNo={1}>
        <FormHeading><FontAwesomeIcon icon={faAngleRight} /> Shipping Address</FormHeading>
        <Fieldset>
          <FieldLabel htmlFor="shipping_firstName">First Name</FieldLabel>
          <Field name="shipping_firstname" component={FieldInput} type="text" required />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="shipping_surname">Surname</FieldLabel>
          <Field name="shipping_surname" component={FieldInput} type="text" required />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="shipping_address1">Street Address</FieldLabel>
          <Field name="shipping_address1" component={FieldInput} type="text" required />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="shipping_address2">Unit/Suite/Apt no. etc (optional)</FieldLabel>
          <Field name="shipping_address2" component={FieldInput} type="text" />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="shipping_city">Suburb/City</FieldLabel>
          <Field name="shipping_city" component={FieldInput} type="text" />
        </Fieldset>
        <SplitFieldset>
          <Fieldset>
            <FieldLabel htmlFor="shipping_state">State</FieldLabel>
            <Field name="shipping_state" component={FieldSelect} placeholder="--- Select ---">
              <option value={null} disabled>--- Select ---</option>
              { stateList.map(s => <option value={s}>{s}</option>) }
            </Field>
          </Fieldset>
          <Fieldset>
            <FieldLabel htmlFor="shipping_postcode">Postcode</FieldLabel>
            <Field name="shipping_postcode" component={FieldInput} type="text" />
          </Fieldset>
        </SplitFieldset>
      </FormSection>

      <FormSection sectionNo={2}>
        <FormHeading><FontAwesomeIcon icon={faAngleRight} /> Billing Address</FormHeading>
        <FullSpanFieldset>
          <CheckboxFieldset>
            <Field name="sameAsShipping" component="input" type="checkbox" />
            <FieldLabel htmlFor="sameAsShipping">Same as Shipping Address</FieldLabel>
          </CheckboxFieldset>
        </FullSpanFieldset>
        <Fieldset>
          <FieldLabel htmlFor="billing_firstName">First Name</FieldLabel>
          <Field name="billing_firstname" component={FieldInput} type="text" required />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="billing_surname">Surname</FieldLabel>
          <Field name="billing_surname" component={FieldInput} type="text" required />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="billing_address1">Street Address</FieldLabel>
          <Field name="billing_address1" component={FieldInput} type="text" required />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="billing_address2">Unit/Suite/Apt no. etc (optional)</FieldLabel>
          <Field name="billing_address2" component={FieldInput} type="text" />
        </Fieldset>
        <Fieldset>
          <FieldLabel htmlFor="billing_city">Suburb/City</FieldLabel>
          <Field name="billing_city" component={FieldInput} type="text" />
        </Fieldset>
        <SplitFieldset>
          <Fieldset>
            <FieldLabel htmlFor="billing_state">State</FieldLabel>
            <Field name="billing_state" component={FieldSelect} placeholder="--- Select ---">
              <option value={null} disabled>--- Select ---</option>
              { stateList.map(s => <option value={s}>{s}</option>) }
            </Field>
          </Fieldset>
          <Fieldset>
            <FieldLabel htmlFor="billing_postcode">Postcode</FieldLabel>
            <Field name="billing_postcode" component={FieldInput} type="text" />
          </Fieldset>
        </SplitFieldset>
      </FormSection>
    </form>
  );
};

export default reduxForm({
  form: 'checkout',
})(ShippingForm);
