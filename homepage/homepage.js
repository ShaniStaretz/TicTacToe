import { userList, User } from "../users/user.js";
import {
  getAllUsers,
  isUserExists,
  getUserByEmailAndPassword,
} from "../firebase/firebase.js";

let loginForm = document.getElementById("loginForm");
let submitEl = document.getElementById("submit");
let playerDoesNotExistEl = document.getElementById("player-does-not-exist");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let guestElement = document.getElementById("guest");

let userExists = false;

getAllUsers();

if (
  localStorage.getItem("loggedUser") === undefined ||
  localStorage.getItem("loggedUser") === null ||
  localStorage.getItem("loggedUser").length === 0
) {
  localStorage.setItem("loggedUser", "Guest");
  console.log("done");
}

let userArray = localStorage.getItem("userList");
let parsedArray = JSON.parse(userArray);
console.log(parsedArray);
// console.log(parsedArray[0]);
console.log(typeof parsedArray);

const getUser = () => {
  let e_mail = emailElement.value;
  let password = passwordElement.value;
  getUserByEmailAndPassword(e_mail, password)
    .then((res) => {
      console.log(res);
      if (res !== null) {
        let fullName = `${res[0].FirstName} ${res[0].LastName}`;
        let userId = res[1];

        console.log("exists");
        console.log(fullName);
        localStorage.setItem("loggedUser", fullName);
        localStorage.setItem("loggedUserId", userId);
        let now = new Date();
        let storedYear = now.getFullYear();
        let storedMonth = now.getMonth();
        let storedDay = now.getDate();
        let date = [storedDay, storedMonth, storedYear];
        localStorage.setItem("loginDay", date);
        let storedDate = localStorage.getItem("loginDay");
        console.log(storedDate);

        console.log("logged");
        loginForm.reset();
        window.location.href = "../game-one-player/index.html";
        userExists = true;
        console.log("true");
        return true;
      } else {
        playerDoesNotExistEl.className = "not-exists";
        loginForm.reset();
        localStorage.setItem("loggedUser", "Guest");
        return false;
      }
    })
    .catch((err) => {
      console.log("Unsuccessful getting user: " + err);
    });
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getUser();
});

emailElement.addEventListener("input", (e) => {
  playerDoesNotExistEl.className = "hidden not-exists";
});

passwordElement.addEventListener("input", (e) => {
  playerDoesNotExistEl.className = "hidden not-exists";
});

guestElement.addEventListener("click", (e) => {
  localStorage.setItem("loggedUser", "Guest");
  localStorage.removeItem("loggedUserId");
  localStorage.removeItem("loginDay");
});
