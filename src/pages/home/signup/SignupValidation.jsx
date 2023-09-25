function Validation(values) {
  let error = {}
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (values.name === "") {
    error.name = "Le nom ne doit pas être vide";
  } else {
    error.name = "";
  }
  if (values.email === "") {
    error.email = "L'e-mail ne doit pas être vide";
  }else if (!email_pattern.test(values.email)) {
      error.email = "L'e-mail ne correspond pas";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Le mot de passe ne doit pas être vide";
  } else if (values.confirmPassword !== values.password) {
    error.password = "Les mots de passe ne correspondent pas";
  } else {
    error.password = "";
  }
  if (Object.keys(error).length === 0) {
    // Alert the user that the registration was successful
    alert("Registration successful!");
  }
  return error;
}
export default Validation;