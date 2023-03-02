import React from "react";
import "./style.css";
import {useFormik} from "formik";
import { loginSchema } from "../../schema/yup";




const initialValues ={
  username:"",
  fname:"",
  lname:"",
  password:"",
  cpassword:"",

};

const  Register =()=> {
  const {values,errors,handleBlur, touched, handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit:(values, action) => {
      console.log(values);
      action.resetForm();
     }}
  );
 
  return (
    <div className="main-card">
      <h1>Login</h1>
      <div className="box">
        <form className="form" for="username" onSubmit={handleSubmit}>
      <label>username</label>
      <input label="Username"
      type="text"
      id="username"
      name="username"
      value={values.username}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Enter your username"/>
      { errors.username && touched.username ?(<p className="form-error"style={{ color: "red" }}>{errors.username}</p>)
    :null}
    <label>First Name</label>
    <input label="First Name"
    type="text"
    id="fname"
    name="fname"
    value={values.fname}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Enter Your First Name"/>
    { errors.fname && touched.fname ?(<p className="form-error"style={{ color: "red" }}>{errors.fname}</p>)
  :null}
  <label>Last Name</label>
    <input label="Last Name"
    type="text"
    id="lname"
    name="lname"
    value={values.lname}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Enter Your Last Name"/>
    { errors.lname && touched.lname ?(<p className="form-error"style={{ color: "red" }}>{errors.lname}</p>)
  :null}
  <label>password</label>
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
<label>Confirm Password</label>
<input  label="Confirm Password"
type="password"
id="cpassword"
name="cpassword"
value={values.cpassword}
onChange={handleChange}
onBlur={handleBlur}
placeholder="Enter Your Confirm Password"/>
{ errors.cpassword && touched.cpassword ?(<p className="form-error"style={{ color: "red" }}>{errors.cpassword}</p>)
:null} 
         
          <labe for="gender" className="radio">
          <input type="radio" value="Male" name="gender" /> Male<br/>
          <input type="radio" value="Female" name="gender" /> Female
          </labe>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
