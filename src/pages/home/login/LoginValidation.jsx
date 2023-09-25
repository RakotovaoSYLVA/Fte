function Validation(values) {
    let error = {};
    const email_pattern = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else {
      error.email = "";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else {
      error.password = "";
    }
  
    return error;
  }
  
  export default Validation;
  