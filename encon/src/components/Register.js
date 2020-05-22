import React from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import '../styles/Register.scss';
import { Headeralt } from '../components/Headeralt.js';



const SignUp = ({ values, errors, touched, isSubmitting }, props) => (
  <div className="register-container">
    <Form>
      <div>
        <Headeralt />
        <label htmlFor="name" className="label">
          Name
        </label>
        <Field type="text" name="name" className="input" />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <Field type="text" name="email" className="email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="label">
          Password
        </label>
        <Field type="password" name="password" className="input" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="zip" className="label">
          Zip
        </label>
        <Field type="text" name="zip" className="input" />
        {touched.zip && errors.zip && <p>{errors.zip}</p>}
      </div>
      <button type="submit">Register</button>
    </Form>
  </div>
);

export const Register = withFormik({
  mapPropsToValues({ name, email, password, zip }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      zip: zip || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(4).required("must be 4+ chars long"),
    email: Yup.string().min(4).required("must be 4+ chars long"),
    password: Yup.string().min(4).required("must be 4+ chars long"),
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

