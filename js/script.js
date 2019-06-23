var link = document.querySelector(".appointment-button");

var popup = document.querySelector(".appointment-form");
popup.classList.add("appointment-form-hide");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("appointment-form-hide");
});
