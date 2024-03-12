const menu = document.getElementById("menu");
const btn_menu = document.getElementById("btn-menu");
const btn_menu_close = document.getElementById("btn-menu-close");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");
btn_menu.addEventListener("click", () => {
  btn_menu.style.display = "none";
  btn_menu_close.style.display = "block";
  menu.style.display = "block";
});
btn_menu_close.addEventListener("click", () => {
  btn_menu.style.display = "block";
  btn_menu_close.style.display = "none";
  menu.style.display = "none";
});

emailInput.addEventListener("blur", function () {
  if (emailInput.value == "") {
    if (!emailInput.checkValidity()) {
      emailError.classList.remove("hidden");
      emailInput.style.border = "2px solid red ";
      emailInput.style.backgroundColor = "rgb(255,232,230)";
    } else {
      emailError.classList.add("hidden");
    }
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.value != "") {
    emailInput.style.borderColor = "black";
    emailInput.style.backgroundColor = "white";
    emailError.classList.add("hidden");
  }
});
