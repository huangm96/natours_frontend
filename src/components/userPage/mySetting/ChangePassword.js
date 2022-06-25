import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  MyForm,
  MyTextInput,
  MyFormButton,
  FormFeedback,
} from "../../form/FormElements";
import UserContext from "../../../context/UserContext";
const ChangePassword = () => {
  const {
    updateMyPassword,
    updatePasswordLoading,
    error,
    updatePasswordSuccess,
  } = useContext(UserContext);

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
      }}
      validationSchema={Yup.object({
        currentPassword: Yup.string().required("Required"),
        newPassword: Yup.string()
          .required("Required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
        newPasswordConfirm: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("newPassword")], "Passwords must match"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        updateMyPassword(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <MyForm heading="Password change">
        <MyTextInput
          label="Current Password"
          name="currentPassword"
          type="password"
        />

        <MyTextInput label="New Password" name="newPassword" type="password" />
        <MyTextInput
          label="New Password"
          name="newPasswordConfirm"
          type="password"
        />
        <MyFormButton
          loading={updatePasswordLoading}
          text="Save Password"
          style={{ alignSelf: "end" }}
        />
        <FormFeedback error={error} success={updatePasswordSuccess} />
      </MyForm>
    </Formik>
  );
};

export default ChangePassword;
