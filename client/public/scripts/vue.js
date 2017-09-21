
const app = new Vue({
  el: "#header",
  data: {
    styleObject: {
      visibility: "hidden"
    },

    methods: {
      changeVisibility() {
        console.log("lmao");
      }
    }
  }
});

var loginShow = document.querySelector(".loginShow");
var registerShow = document.querySelector(".registerShow");
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

registerShow.addEventListener("click", function() {
  loginBox.classList.toggle("hidden");
  registerBox.classList.toggle("hidden");
});

document.querySelector("#searchName").focus();

