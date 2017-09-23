var loginShow = document.querySelector(".loginShow");
var changeRegister = document.querySelector(".changeRegister");
var changeLogin = document.querySelector(".changeLogin");
var loginBox = document.querySelector("#loginBox");
var registerBox = document.querySelector("#registerBox");


loginShow.addEventListener("click", function() {
  if (loginBox.classList.value.indexOf("hidden") < 0 || registerBox.classList.value.indexOf("hidden") < 0) {
    loginBox.classList.add("hidden");
    registerBox.classList.add("hidden");
  } else {
    loginBox.classList.toggle("hidden");
  }
});

changeRegister.addEventListener("click", function() {
  loginBox.classList.toggle("hidden");
  registerBox.classList.toggle("hidden");
});

changeLogin.addEventListener("click", function() {
  loginBox.classList.toggle("hidden");
  registerBox.classList.toggle("hidden");
});





