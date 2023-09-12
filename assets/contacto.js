const registerForm = document.getElementById("form-contacto");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("textocaja");


// Funcion para chequear si el campo input esta vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Funcion para determinar si el largo del value del input esta entre un min y un max

const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

// Funcion para validar la direccion email con expresiones regulares.

const isEmailValid = (input) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return regex.test(input.value.trim());
};



const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");

  error.style.display = "block";
  error.textContent = message;
};

// Función para mostrar un input como valido
const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
};

/****************************** */

// Función para validar un input de tipo texto
// validar que solo sea letras
const checkTextInput = (input) => {
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }
  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres.`
    );
    return;
  }
  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar un input de tipo email

const checkEmail = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "El email es obligatorio");
    return;
  }

  if (!isEmailValid(input)) {
    showError(input, "El mail no es valido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};



// Funcion para validar el formulario y almacenar datos en el array de users

const validateForm = (e) => {
  e.preventDefault();
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isValidComment = checkTextInput(commentInput);


  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isValidComment
    
    ;

  if (isValidForm) {
    alert("El mensaje ha sido enviado correctamente!");
    window.location.href = "index.html";
  }
};

const init = () => {
  registerForm.addEventListener("submit", validateForm);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  commentInput.addEventListener("input", ()=> checkCommentInput(commentInput) );
};

init();