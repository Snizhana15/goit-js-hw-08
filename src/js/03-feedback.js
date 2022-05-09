import throttle from "lodash.throttle";
const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea"),
};
window.addEventListener("DOMContentLoaded", setFormValues);

const state = localStorage.getItem("feedback-form-state")
  ? JSON.parse(localStorage.getItem("feedback-form-state"))
  : {};
refs.form.addEventListener("submit", event => {
  event.preventDefault();
  console.log({ email: refs.email.value, message: refs.textarea.value });
  event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
});

refs.textarea.addEventListener("input", throttle(handleSetStorageState, 500));
refs.email.addEventListener("input", throttle(handleSetStorageState, 500));

function handleSetStorageState(event) {
  state[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(state));
}

function setFormValues() {
  if (!localStorage.getItem("feedback-form-state")) {
    return;
  }
  const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (savedData.email) {
    refs.email.value = savedData.email;
  }
  if (savedData.message) {
    refs.textarea.value = savedData.message;
  }
}
