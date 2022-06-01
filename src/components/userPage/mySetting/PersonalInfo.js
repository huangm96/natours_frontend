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
const PersonalInfo = () => {
  const { myData, updateMyData, updateDataLoading, error, success } =
    useContext(UserContext);

  return (
    <div className="personal-info-container">
      <Formik
        enableReinitialize={true}
        initialValues={{ email: myData.email || "", name: myData.name || "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(5, "Must be 5 characters or more")
            .max(40, "Must have less or equal than 40 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          updateMyData(values);
          setSubmitting(false);
        }}
      >
        <MyForm heading="Your account setting">
          <MyTextInput label="name" name="name" type="name" />
          <MyTextInput label="Email Address" name="email" type="email" />

          <MyFormButton
            loading={updateDataLoading}
            text="Save Setting"
            style={{ alignSelf: "end" }}
          />
          <FormFeedback error={error} success={success} />
        </MyForm>
      </Formik>
    </div>
  );
};

export default PersonalInfo;
