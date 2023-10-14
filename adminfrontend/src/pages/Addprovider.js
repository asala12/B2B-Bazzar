import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import {Alert, AlertTitle} from '@mui/material'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { createProviders, resetState } from "../features/providers/providerSlice";
let schema = yup.object().shape({
  firstname: yup.string().required("firstname is Required"),
  lastname: yup.string().required("lastname is Required"),
  email: yup.string().email("Email should be valid").required("email is Required"),
  mobile: yup.number().required("mobile is Required"),
  password: yup.string().required("password is Required"),
});

const Addprovider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newProvider = useSelector((state) => state.provider);
  const { isSuccess, isError, isLoading, createdProvider} = newProvider;
  useEffect(() => {
    if (isSuccess && createdProvider) {
      <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  The provider added Successfullly — <strong>check it out!</strong>
</Alert>
    }
    if (isError) {
        <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  Something Went Wrong!
</Alert>
      
    }
  }, [isSuccess, isError, isLoading]);

 
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProviders(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });
 
  return (
    <div>
      <h3 className="mb-4 title">Add Provider</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Provider First name"
            name="firstname"
            onChng={formik.handleChange("firstname")}
            onBlr={formik.handleBlur("firstname")}
            val={formik.values.firstname}
          />
          <div className="error">
            {formik.touched.firstname && formik.errors.firstname}
          </div>
          <CustomInput
            type="text"
            label="Enter Provider Last name"
            name="lastname"
            onChng={formik.handleChange("lastname")}
            onBlr={formik.handleBlur("lastname")}
            val={formik.values.lastname}
          />
          <div className="error">
            {formik.touched.lastname && formik.errors.lastname}
          </div>
           <CustomInput
            type="text"
            label="Enter Provider Email"
            name="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            type="number"
            label="Enter Provider Mobile number"
            name="mobile"
            onChng={formik.handleChange("mobile")}
            onBlr={formik.handleBlur("mobile")}
            val={formik.values.mobile}
          />
          <div className="error">
            {formik.touched.mobile && formik.errors.mobile}
          </div>
          <CustomInput
            type="password"
            label="Enter Provider password"
            name="password"
            onChng={formik.handleChange("password")}
            onBlr={formik.handleBlur("password")}
            val={formik.values.password}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Provider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addprovider;