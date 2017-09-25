// Shared
var loginShow = document.querySelector(".loginShow");
var changeRegister = document.querySelector(".changeRegister");
var changeLogin = document.querySelector(".changeLogin");
var loginBox = document.querySelector("#loginBox");
var registerBox = document.querySelector("#registerBox");

// If not logged in
if (loginShow) {
  loginShow.addEventListener("click", function() {
    if (loginBox.classList.value.indexOf("hidden") < 0 || registerBox.classList.value.indexOf("hidden") < 0) {
      loginBox.classList.add("hidden");
      registerBox.classList.add("hidden");
    } else {
      loginBox.classList.toggle("hidden");
      document.querySelector("#loginEmail").focus();
    }
  });
}


changeRegister.addEventListener("click", function() {
  loginBox.classList.toggle("hidden");
  registerBox.classList.toggle("hidden");
  document.querySelector("#registerEmail").focus();
});

changeLogin.addEventListener("click", function() {
  loginBox.classList.toggle("hidden");
  registerBox.classList.toggle("hidden");
  document.querySelector("#loginEmail").focus();
});

// Service page
if (document.querySelector("#services")) {
  var clearInput = document.querySelector(".clearInput");
  var searchNameServices = document.querySelector("#searchNameServices");

  clearInput.addEventListener("click", function() {
    searchNameServices.value = "";
  });
}

// Index page
if (document.querySelector("#landing")) {
  document.querySelector("#searchName").focus();
}






