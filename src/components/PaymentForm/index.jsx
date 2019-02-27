import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Cta from 'components/Cta';
import getSchema from './schema';
import * as styles from './styles';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.boundHandleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { history, submit } = this.props;
    submit(values);
    history.push('/checkout/receipt');
  }

  render() {
    const {
      Actions,
      Error,
      Fieldset,
      Heading,
      HeadingContainer,
      Input,
      Label,
      Section,
    } = styles;

    const initialValues = {};

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, action) => this.boundHandleSubmit(values, action)}
        validationSchema={getSchema}
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
              <Section sectionNo={3}>
                <HeadingContainer>
                  <Heading><FontAwesomeIcon icon={faAngleRight} /> Payment Details</Heading>
                </HeadingContainer>
                <Fieldset>
                  <Label htmlFor="email" error={!!errors.email}>Email</Label>
                  { errors.email && touched.email && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {errors.email}</Error> }
                  <Input name="email" type="email" onBlur={handleBlur} onChange={handleChange} value={values.email} required />
                </Fieldset>
              </Section>
              <Actions>
                <Cta to="/checkout/shipping">Back</Cta>
                <Cta primary onClick={submitForm}>Place Order</Cta>
              </Actions>
            </form>
          );
        }}
      />
    );
  }
}

PaymentForm.propTypes = {
  history: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};

export default withRouter(PaymentForm);
