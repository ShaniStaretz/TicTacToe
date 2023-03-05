// import { userList, User } from "../users/user.js";
// import { getAllUsers } from "../firebase/firebase.js";

// let loginForm = document.getElementById("loginForm");
// let submitEl = document.getElementById("submit");
// let playerDoesNotExistEl = document.getElementById("player-does-not-exist");

// let userExists = false;

// getAllUsers();

// if (
//   localStorage.getItem("userList") === undefined ||
//   localStorage.getItem("userList") === null ||
//   localStorage.getItem("userList").length === 0
// ) {
//   localStorage.setItem("userList", JSON.stringify(userList));
//   console.log("done");
// }

// if (
//   localStorage.getItem("loggedUser") === undefined ||
//   localStorage.getItem("loggedUser") === null ||
//   localStorage.getItem("loggedUser").length === 0
// ) {
//   localStorage.setItem("loggedUser", "Guest");
//   console.log("done");
// }

// let userArray = localStorage.getItem("userList");
// let parsedArray = JSON.parse(userArray);
// console.log(parsedArray);
// // console.log(parsedArray[0]);
// console.log(typeof parsedArray);

// const checkingExists = (first_Name, last_Name, e_mail) => {
//   userArray = localStorage.getItem("userList");
//   parsedArray = JSON.parse(userArray);
//   console.log(parsedArray[0]);

//   parsedArray.forEach((user) => {
//     console.log("checking");
//     console.log(user.firstName + " " + user.lastName + " " + user.email);
//     if (
//       user.firstName.toLowerCase() === first_Name.toLowerCase() &&
//       user.lastName.toLowerCase() === last_Name.toLowerCase() &&
//       user.email.toLowerCase() === e_mail.toLowerCase()
//     ) {
//       console.log("exists");
//       localStorage.setItem("loggedUser", `${first_Name} ${last_Name}`);
//       console.log("logged");
//       loginForm.reset();
//       window.location.href = "../game/index.html";
//       userExists = true;
//       console.log("true");
//       return true;
//     }
//   });
//   return userExists;
// };

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let first_Name = document.getElementById("firstName").value;
//   let last_Name = document.getElementById("lastName").value;
//   let e_mail = document.getElementById("email").value;

//   userExists = checkingExists(first_Name, last_Name, e_mail);

//   if (userExists === false) {
//     playerDoesNotExistEl.className = "visible";
//     submitEl.className = "hidden";
//     loginForm.reset();
//     let toRegEl = document.getElementById("go-to-register2");
//     let playAsGuestEl = document.getElementById("play-as-guest");
//     toRegEl.addEventListener("click", goToReg);
//     playAsGuestEl.addEventListener("click", goToGame);
//     localStorage.setItem("loggedUser", "Guest");
//   }
// });

// const goToReg = () => {
//   playerDoesNotExistEl.className = "hidden";
//   console.log("gotoReg clicked");
//   window.location.href = "../register/register.html";
// };

// const goToGame = () => {
//   playerDoesNotExistEl.className = "hidden";
//   console.log("gotoGame clicked");
//   window.location.href = "../game/index.html";
// };
