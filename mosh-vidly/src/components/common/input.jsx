import React from "react";
const Input = ({ name, label, error, ...restOfProps }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...restOfProps} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
