import React from "react";
import "./Login.css";
import {useFormik} from "formik";
import { loginSchema } from "../../components/schema/Yup";


const initialValues ={
  username:"",
  password:"",

};

const Login =()=> {
 const {values,errors,handleBlur, touched, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
   onSubmit:(values, action) => {
      console.log(values);
      action.resetForm();
     }}
  );

  return (
    <div className="form-group">
      <h1>Login</h1>
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
        <label>Username</label>
          <input label="Username"
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your username"/>
          { errors.username && touched.username ?(<p className="form-error"style={{ color: "red" }}>{errors.username}</p>)
        :null}
          <br/>
          <label>Password</label>
          <input  label="Password"
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Password"/>
          { errors.password && touched.password ?(<p className="form-error"style={{ color: "red" }}>{errors.password}</p>)
          :null} 

           <button type="submit" className="btn">Login</button>
          </form>
      </div>
    </div>
 
  );
}
export default Login;
