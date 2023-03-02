import * as Yup from "yup"

export const loginSchema = Yup.object({
    username:Yup.string().min(2).max(12).required("please enter username"),
    fname:Yup.string().min(2).max(12).required("please enter your firsr name"),
    lname:Yup.string().min(2).max(12).required("please enter your last name"),
    password:Yup.string().min(5).required("please enter your password"),
    cpassword:Yup.string().min(5).required()
    .oneOf([Yup.ref("password"),null],"password must match"),
});