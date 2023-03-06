import { userList, User } from "../users/user.js";
import {
  addUser,
  addUserWithId,
  getAllUsers,
  getNumberOfUsers,
  isUserExists,
  isEmailExists,
} from "../firebase/firebase.js";

let registerForm = document.getElementById("registerForm");
let playerExistsEl = document.getElementById("player-exists");
let playerAddedEl = document.getElementById("player-added");
let userExists = false;

const checkingExists = (e_mail) => {
  isEmailExists(e_mail)
    .then((res) => {
      console.log("Is user exists? " + res);
      return res;
    })
    .catch((err) => {
      console.log("Unsuccessful user check: " + err);
    });
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let first_Name = document.getElementById("firstName").value;
  let last_Name = document.getElementById("lastName").value;
  let e_mail = document.getElementById("email").value;
  let pw = document.getElementById("password").value;

  userExists = checkingExists(e_mail);
  console.log("userExists? " + userExists);

  if (!userExists) {
    console.log(first_Name + " " + last_Name + " " + e_mail);
    // const newUser = new User(first_Name, last_Name, e_mail,0);

    let userId = null;

    getNumberOfUsers()
      .then((res) => {
        console.log("res from len " + res);
        console.log(res + " " + typeof res);
        userId = res + 1;
        addUserWithId(first_Name, last_Name, e_mail, pw, userId);
        registerForm.reset();

        console.log("userid1: " + userId);
        localStorage.setItem("loggedUser", `${first_Name} ${last_Name}`);
        localStorage.setItem("loggedUserId", `${userId}`);

        console.log("added");

        playerAddedEl.className = "visible";
        // let OKEl2 = document.getElementById("OK2");
        // OKEl2.addEventListener("click", OKFunc);
        setTimeout(() => {
          window.location.href = "../game-one-player/index.html";
        }, "1000");
      })
      .catch((err) => {
        console.log("Unsuccessful adding, error:" + err);
      });
  }
});

const OKFunc = () => {
  playerExistsEl.className = "hidden";
  playerAddedEl.className = "hidden";
  console.log("OK clicked");
  window.location.href = "../game-one-player/index.html";
  registerForm.reset();
};
