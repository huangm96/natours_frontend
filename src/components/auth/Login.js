import React, { useEffect, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  MyForm,
  MyTextInput,
  MyFormButton,
  FormFeedback,
} from "../form/FormElements";
import AuthContext from "../../context/AuthContext";
const Login = () => {
  const { login, loading, success, error, setError } = useContext(AuthContext);
  useEffect(() => {
    setError("");
  }, []);

  return (
    <div className="login-container" style={{ margin: "5rem auto" }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          login(values, resetForm);
          setSubmitting(false);
        }}
      >
        <MyForm heading="Log into your account">
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
            autoFocus={true}
          />
          <MyTextInput label="Password" name="password" type="password" />

          <MyFormButton loading={loading} text="Login" />
          <FormFeedback error={error} success={success} />
        </MyForm>
      </Formik>
    </div>
  );
};

export default Login;
