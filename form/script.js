const form = document.querySelector(".singup-form");

const pristine = new Pristine(form, {
  classTo: "form-field",
  errorClass: "is-invalid",
  successClass: "is-valid",
  errorTextParent: "form-field",
  errorTextClass: "invalid-feeblack",
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valid = pristine.validate();
  if (valid) {
    console.log("submit");
  } else {
    console.log("Invalid Form");
  }
});
