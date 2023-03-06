import { userList, User } from "../users/user.js";
import {
  getAllUsers,
  isUserExists,
  getUserByEmailAndPassword,
} from "../firebase/firebase.js";

let loginForm = document.getElementById("loginForm");
let submitEl = document.getElementById("submit");
let playerDoesNotExistEl = document.getElementById("player-does-not-exist");

let userExists = false;

getAllUsers();

// if (
//   localStorage.getItem("userList") === undefined ||
//   localStorage.getItem("userList") === null ||
//   localStorage.getItem("userList").length === 0
// ) {
//   localStorage.setItem("userList", JSON.stringify(userList));
//   console.log("done");
// }

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

// const getUser = (e_mail, password) => {
//   getUserByEmailAndPassword(e_mail, password)
//     .then((res) => {
//       console.log(res);
//       return res;
//     })
//     .catch((err) => {
//       console.log("Unsuccessful user check: " + err);
//     });
// };

const getUser = (e_mail, password) => {
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
        return false;
      }
    })
    .catch((err) => {
      console.log("Unsuccessful getting user: " + err);
    });
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let e_mail = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  //   userExists = checkingExists(e_mail, password);
  //   theUser = getUser(e_mail, password);
  userExists = getUser(e_mail, password);

  if (userExists === false) {
    playerDoesNotExistEl.className = "visible";
    submitEl.className = "hidden";
    loginForm.reset();
    let toRegEl = document.getElementById("go-to-register2");
    let playAsGuestEl = document.getElementById("play-as-guest");
    toRegEl.addEventListener("click", goToReg);
    playAsGuestEl.addEventListener("click", goToGame);
    localStorage.setItem("loggedUser", "Guest");
  }
});

const goToReg = () => {
  playerDoesNotExistEl.className = "hidden";
  console.log("gotoReg clicked");
  window.location.href = "../register/register.html";
};

const goToGame = () => {
  playerDoesNotExistEl.className = "hidden";
  console.log("gotoGame clicked");
  window.location.href = "../game-one-player/index.html";
};
