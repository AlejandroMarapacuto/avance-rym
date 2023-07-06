export const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const errors = {
    email: "",
    password: "",
  };

  if (!userData.email) {
    errors.email = "Se requiere un email";
  }

  if (!regexEmail.test(userData.email)) {
    errors.email = "Must be an email";
  }

  // if (userData.email.length > 35) {
  //   errors.email = "No puede tener mas de 35 caracteres!";
  // }

  if (!userData.password) {
    errors.password = "Must have at least 1 number";
  }

  // if (userData.password.length < 6 && userData.password.length > 10) {
  //   errors.password = "Debe tener una longitud entre 6 y 10 caracteres";
  // }

  return errors;
};
