import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return {};
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });
    if (!error) return {};
    return error.details[0].message;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();

    //    this.setState({ errors: errors || {} });
    this.setState({ errors });
    if (Object.keys(errors).length !== 0) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (Object.keys(errorMessage).length !== 0)
      errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    // prettier-ignore
    return <button disabled={Object.keys(this.validate()).length > 0} className="btn btn-primary">{label}</button>;
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    // prettier-ignore
    return <Input name={name} type={type} value={data[name]} label={label} onChange={this.handleChange} error={errors[name]} />
  }
}

export default Form;
