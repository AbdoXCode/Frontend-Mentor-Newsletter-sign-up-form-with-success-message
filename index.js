const form = document.getElementById("form");
const email = document.getElementById("email");
const errorText = document.getElementById("error");
const main = document.getElementById("main");
const successContainer = document.getElementById("success-container");
const spanEmail = document.getElementById("span-email");
const dismissBtn = document.getElementById("dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail(true);
});

email.addEventListener("input", () => {
  validateEmail(false);
});

dismissBtn.addEventListener("click", () => {
  dismiss();
  email.value = "";
});
function validateEmail(submit) {
  const formData = new FormData(form);
  const emailData = Object.fromEntries(formData).email.trim();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailData);

  if (isValid) {
    removeError();
    if (submit) {
      showSuccessMessage();
    }
  } else {
    showError();
  }
}

function showError() {
  email.classList.add("error");
  errorText.style.display = "block";
}
function removeError() {
  email.classList.remove("error");
  errorText.style.display = "none";
}

function showSuccessMessage() {
  main.classList.add("hidden");
  successContainer.classList.remove("hidden");
  spanEmail.textContent = email.value;
}

function dismiss() {
  successContainer.classList.add("hidden");
  main.classList.remove("hidden");
}
