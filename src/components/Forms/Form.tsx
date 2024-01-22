import { Input } from "./Input";
import { validateEmail } from "../../helpers/helpers";

import { Formik, Form as ReactForm, Field } from 'formik';
import * as Yup from 'yup';

export interface FormInput {
  firstName: string;
  password: string;
  email: string;
  datePicker: Date | null;
}
interface IForm {
  step: number;
  handleNext: (data: Record<string, string>) => void
}


const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Name is required'),

  dateOfBirth: Yup.date()
    .required('Date of birth is required')
    .test('is-at-least-18', 'Must be at least 18 years old', function (value) {
      const currentDate = new Date();
      const minDate = new Date();
      minDate.setFullYear(currentDate.getFullYear() - 18);
      return value <= minDate;
    })
    .test('is-at-most-60', 'Must be at most 60 years old', function (value) {
      const currentDate = new Date();
      const maxDate = new Date();
      maxDate.setFullYear(currentDate.getFullYear() - 60);
      return value >= maxDate;
    }),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 15 characters')
    .matches(/.*[A-Z].*/, 'Password must include at least one uppercase letter')
    .matches(/.*[a-z].*/, 'Password must include at least one lowercase letter')
    .matches(
      /^(?=.*\d)(?=.*[#\[\]()@$&*!?|,.^\/\\+_\-])/,
      'Password must include at least one number, and one special character (#[]()@$&*!?|,.^/\+_-)'
    ),
  email: Yup.string().email('Invalid email').required('Required'),
});



export const Form: React.FC<IForm> = ({ step, handleNext }) => {

  const onSubmit = (data: any) => {
    handleNext(data)
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          password: '',
          dateOfBirth: null
        }}
        validationSchema={validationSchema}
        onSubmit={
          onSubmit}
      >
        {({ errors, touched, values }) => (
          <>
            <ReactForm>
              {step === 1 &&
                <>
                  <div className='form_input_wrap flex flex-nowrap justify-start align-start col-gap-5 mb-12'>
                    <Field name='firstName' type="text" errors={errors} touched={touched} component={Input} label="First Name" id='firstName' />
                    <Field
                      label="Date Picker"
                      type='date'
                      name='dateOfBirth'
                      errors={errors} touched={touched}
                      component={Input}
                    />
                  </div>
                  <div className='form_input_buttons flex justify-center align-center w-100 mb-7'>
                    <button onClick={() => onSubmit(values)} type="submit" className='btn btn--wide btn--primary font-secondary'>Continue</button>
                  </div>
                </>
              }
            </ReactForm>
            <ReactForm >
              {step === 2 &&
                <>
                  <div className='form_input_wrap flex flex-nowrap justify-start align-start col-gap-5 mb-12' >
                    <Field name="email" type="email" errors={errors} touched={touched} component={Input} label="Email" id='email' validate={validateEmail} />
                    <Field name='password' type="password" errors={errors} touched={touched} component={Input} label="Password" id='password' />

                  </div>
                  <div className='form_input_buttons flex justify-center align-center w-100 mb-7'>
                    <button className='btn btn--wide btn--primary font-secondary' type="submit">Register now</button>
                  </div>
                </>
              }
            </ReactForm>
          </>
        )}
      </Formik>
    </>
  );
};
