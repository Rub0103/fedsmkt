import { FieldProps } from "formik";
import { passwordValidationMessages } from "../../constants/constants";

export const Input: React.FC<FieldProps<string> | any> = ({ field, form, label, errors, type, touched, ...props }) => {

  if (type === 'password') {
    return <>
      <div className='form_input_holder w-100 grow-1 shrink-1 flex flex-col justify-start align-stretch row-gap-1'>
        <label htmlFor={label} className='block fs-sm lh-sm fw-700 c-white'>{label}</label>
        <input {...field}  {...props} className='input' type={type} />
        <ul className="pl-5">
          {passwordValidationMessages.map((validation: string) => {
            return <li className={errors[field.name] === validation ? 'c-red' : 'c-green'} key={validation}>
              {validation}
            </li>
          })}
        </ul>
      </div>
    </>
  }

  return (
    <>
      <div className='form_input_holder w-100 grow-1 shrink-1 flex flex-col justify-start align-stretch row-gap-1'>
        <label htmlFor={label} className='block fs-sm lh-sm fw-700 c-white'>{label}</label>
        <input {...field}  {...props} className='input' type={type} />
        {errors[field.name] && touched[field.name] ? (
          <div className='c-red'>{errors[field.name]}</div>
        ) : null}
        {/* classnames input--valid/input--invalid */}
      </div>
    </>



  );
};
