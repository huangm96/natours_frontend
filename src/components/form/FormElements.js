import React from "react";
import { useField, Form } from "formik";
import { buttonSpinnerIcon } from "./../../utils/loadingIcon";
import "./FormElements.css";
import { getDate } from "./../../utils/getDate";
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
export const MyFormButton = ({ loading, text, ...props }) => {
  return (
    <button
      className="btn green-btn form-element-button"
      type="submit"
      formNoValidate="formnovalidate"
      disabled={loading ? true : false}
      {...props}
    >
      {loading ? buttonSpinnerIcon() : <p className="green-btn-text">{text}</p>}
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

export const MyDateSelect = ({ label, dates, maxGroupSize, ...props }) => {
  const [field, meta] = useField(props);
  let ticketLeft = 100;
  if (field.value) {
    ticketLeft = maxGroupSize - dates[field.value].length;
  } else {
    ticketLeft = 100;
  }

  return (
    <div className="form-element-box">
      <label className="form-element-label" htmlFor={props.id || props.name}>
        {label}
      </label>

      <select className="form-element-select " {...field}>
        <option value="" label="Select a Date" />
        {Object.keys(dates).map((date, i) => {
          if (new Date(date) > new Date()) {
            return <option key={i} value={date} label={getDate(date)} />;
          }
          return null;
        })}
      </select>
      {ticketLeft <= 5 ? (
        <p className="form-element-option-warning">{`-only ${ticketLeft} spots left!`}</p>
      ) : null}

      {meta.touched && meta.error ? (
        <div className="form-element-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export const MyQuantitySelect = ({
  label,
  dates,
  maxGroupSize,
  selectedDate,
  ...props
}) => {
  const [field, meta] = useField(props);
  const getOptions = () => {
    let options = [];
    if (selectedDate) {
      const number = maxGroupSize - dates[selectedDate].length;
      for (let i = 0; i < number; i++) {
        options.push(<option key={i} value={i + 1} label={i + 1} />);
      }
    }
    return options;
  };
  return (
    <div className="form-element-box">
      <label className="form-element-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className="form-element-select " {...field}>
        {selectedDate ? null : (
          <option value="" label="Please Select a Date First" />
        )}

        {getOptions()}
      </select>
      {meta.touched && meta.error ? (
        <div className="form-element-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyReviewTextarea = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-element-textarea-box">
      <textarea
        // className={
        //   meta.touched && meta.error
        //     ? "text-input text-input-error"
        //     : "text-input"
        // }
        className="form-element-textarea"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="form-element-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
