import React from "react";

const DropDown = props => {
  const {
    name,
    value,
    label,
    items,
    error,
    textProperty,
    valueProperty,
    onChange
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-control"
        onChange={onChange}
        value={value}
      >
        <option value="" />
        {items.map(item => (
          <option key={item[valueProperty]} value={item[valueProperty]}>
            {item[textProperty]}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

DropDown.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};

export default DropDown;
