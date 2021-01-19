import React from 'react';
import { useForm } from 'react-hook-form';

const AuthForm = ({
  formData: { title, fields, buttons },
  handleAuth,
  children,
}) => {
  const { register, handleSubmit } = useForm();
  // Submit Callback
  const onSubmit = (data) => {
    handleAuth(data);
  };

  //   Input Groups
  const inputs = fields.map(
    ({ label, attributes: { name, type, placeholder } }, index) => (
      <div key={index} className="form-group">
        <label className="form-label">{label}</label>
        <input
          ref={register({ required: true })}
          className="form-control"
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    )
  );

  //   Submit Buttons
  const submit = buttons.map((button, index) => (
    <button className={`btn mr-3 ${button.varient}`} key={index} type="submit">
      {button.value}
    </button>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col form">
      <h1>{title}</h1>
      {inputs}
      {submit}
      {children}
    </form>
  );
};

export default AuthForm;
