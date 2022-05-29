import React from "react";
import { useField, Form } from "formik";
import { FaSpinner } from "react-icons/fa";
import "./FormElements.css";
export const MyForm = ({ heading, children }) => {
  return (
    <Form className="form-box">
      <p className="green-heading form-heading">{heading}</p>
      {children}
    </Form>
  );
};
export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-element-box">
      <label className="form-element-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? "text-input text-input-error"
            : "text-input"
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="form-element-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export const MyFormButton = ({ loading }) => {
  return (
    <button
      className="btn green-btn form-element-button"
      type="submit"
      formNoValidate="formnovalidate"
      disabled={loading ? true : false}
    >
      {loading ? <FaSpinner /> : <p className="green-btn-text">Sign up</p>}
    </button>
  );
};
export const FormFeedback = ({ error, success }) => {
  return (
    <div>
      {success ? (
        <p className="form-element-feedback success">{success}</p>
      ) : null}
      {error ? <p className="form-element-feedback error">{error}</p> : null}
    </div>
  );
};
