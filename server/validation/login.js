const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateLoginInput = data => {
    let errors = {};
 //checks user role and directs to that dashboard
 /*if(user.role = "Admin")
 {
     console.log(5 + 6);
     this.props.history.push("/admindashboard");
    
 }
 else if (user.role = "Individual Customer")
 {
  
     console.log(5+4)
     this.props.history.push("/dashboard");
 }*/
    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Email Checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is Invalid";
    }

    //Password Checks
    if(validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
    
};