function Validation(values) {
    let error = {}
    const mail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.name_pg === "") {
      error.name_pg = "Le nom ne doit pas être vide";
    } else {
      error.name_pg = "";
    }
    if (values.number_pg === "") {
        error.number_pg = "Le numero ne doit pas être vide";
      } else {
        error.name_pg = "";
      }
    if (values.mail_pg === "") {
      error.mail_pg = "Email should not be empty";
    }else if (!mail_pattern.test(values.mail_pg)) {
        error.mail_pg = "Email Didn't match";
    } else {
      error.email = "";
    }

    if (values.phone_pg === "") {
      error.phone_pg = "Le telephone ne doit pas être vide";
    }  else {
        error.phone_pg = "";
      }

      if (values.nom_game === "") {
        error.nom_game = "Le nom du Jeu ne doit pas être vide";
      }  else {
          error.nom_game = "";
        }
    
    if (Object.keys(error).length === 0) {
      // Alert the user that the registration was successful
      alert("Registration successful!");
    }
    return error;
  }
  export default Validation;