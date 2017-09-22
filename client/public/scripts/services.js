var clearInput = document.querySelector(".clearInput");
var searchNameServices = document.querySelector("#searchNameServices");

clearInput.addEventListener("click", function() {
  searchNameServices.value = "";
});
