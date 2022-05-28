import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../form/FormElements";
const Signup = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <MyTextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />

        <MyTextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
        />

        <MyTextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@formik.com"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Signup;
