import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as Yup from "yup";

import { withFormik, Form, Field } from "formik";
import axios from "axios";
import auth from "./auth";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Login from "./Login";
const SignUp = ({ values, errors, touched, isSubmitting }, props) => (
  <Form>
    <div>
      <p>Track your energy usage and spending</p>
      <Field
        type="text"
        name="name"
        placeholder="Name"
        className="fields"
      />
      {touched.name && errors.name && <p>{errors.name}</p>}
    </div>

    <div>
      <Field
        type="text"
        name="email"
        placeholder="Email"
        className="fields"
      />
      {touched.email && errors.email && <p>{errors.email}</p>}
    </div>

    <div>
      <Field
        type="text"
        name="zip"
        placeholder="Zip"
        className="fields"
      />
      {touched.zip && errors.zip && <p>{errors.zip}</p>}
    </div>

    <button
      disabled={isSubmitting}
      onClick={() => {
        auth.login(() => {});
      }}
    >
      Submit
    </button>
  </Form>
);
const FormikSignUp = withFormik({
  mapPropsToValues({ name, email, zip }) {
    return {
      name: name || "",
      email: email || "",
      zip: zip || "",

    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(4).required("must be 4+ chars long"),
    email: Yup.string().min(4).required("must be 4+ chars long"),
    zip: Yup.string().min(5).required("must be 5+ chars long"),

  }),
  handleSubmit(
    values,
    { resetForm, setErrors, setSubmitting, setStatus, props }
  ) {
    console.log(values);

    resetForm();
    props.history.push("/login");

    setSubmitting(false);

    axios
      .post("https://encon.aws.com/api/auth/register", values)
      .then((res) => {
        console.log("axios", res);
        setStatus(res.data);
      })
      .catch((err) => console.log("error", err));
  },
})(SignUp);

render(<FormikSignUp />, document.getElementById("root"));

export default FormikSignUp;