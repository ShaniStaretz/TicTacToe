let headerGuestElement = document.getElementById("header-guest");

headerGuestElement.addEventListener("click", (e) => {
  localStorage.setItem("loggedUser", "Guest");
  localStorage.removeItem("loggedUserId");
  localStorage.removeItem("loginDay");
});
