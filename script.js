const form = document.querySelector("#input-control");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmailInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorMsg = inputControl.nextElementSibling;
  const errorDisplay = errorMsg.nextElementSibling;

  inputControl.style.borderColor = "red";
  errorDisplay.style.display = "block";
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorMsg = inputControl.nextElementSibling;
  const errorDisplay = errorMsg.nextElementSibling;

  inputControl.style.borderColor = "green";
  errorDisplay.style.display = "none";
  errorMsg.style.display = "none";
  errorMsg.innerText = "";
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
};

const validateEmailInput = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email");
  } else {
    setSuccess(email);
    setTimeout(function () {
      alert("Thanks! We will keep you up-to-date with our announcements.");
    }, 150);
  }
};
