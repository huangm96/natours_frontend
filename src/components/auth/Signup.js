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
const Signup = () => {
  const { signup, loading, success, error, setError } = useContext(AuthContext);
  useEffect(() => {
    setError("");
  }, []);
  return (
    <div className="signup-container" style={{ margin: "5rem auto" }}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(5, "Must be 5 characters or more")
            .max(40, "Must have less or equal than 40 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
          passwordConfirm: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          signup(values, resetForm);
          setSubmitting(false);
        }}
      >
        <MyForm heading="CREATE YOUR ACCOUNT!">
          <MyTextInput
            label="Your Name"
            name="name"
            type="text"
            placeholder="Jane"
            autoFocus={true}
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MyTextInput label="Password" name="password" type="password" />

          <MyTextInput
            label="Confirm Password"
            name="passwordConfirm"
            type="password"
          />
          <MyFormButton loading={loading} text="Sign up" />
          <FormFeedback error={error} success={success} />
        </MyForm>
      </Formik>
    </div>
  );
};

export default Signup;
