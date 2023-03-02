const Validation = (values) =>{
    let errors={}
    if(!values.username){
        errors.username="please enter a username"
    }
    else if(values.username.length<4){
        errors.username="username must be at least 5 characters"
    }
    if(!values.fname){
        errors.fname="please enter a name"
    }
    else if(values.fname.length<4){
        errors.fname="name must be at least 5 characters"
    }
    if(!values.lname){
        errors.lname="please enter a last name"
    }
    else if(values.lname.length<4){
        errors.lname="last name must be at least 4 characters"
    }

    if(!values.password){
        errors.password="please enter a password"
    }
    else if(values.password.length<6){ 
        errors.password="password must be at least 9 characters"
    }
    if(!values.cpassword){
        errors.cpassword="please enter a confirm password"
    }
    else if(values.cpassword.length<6){ 
        errors.cpassword="password must be at least 9 characters"
    }
    else if(values.password !==values.cpassword ){ 
    errors.cpassword="password does not match"
    }

    return errors;
}
export default Validation;