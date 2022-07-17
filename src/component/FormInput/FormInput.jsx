import React from 'react';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input {...otherProps} />
    </div>
  );
};
export default FormInput;
