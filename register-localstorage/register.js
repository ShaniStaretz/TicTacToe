// import { userList, User } from "../users/user.js";
// import {
//   addUser,
//   addUserWithId,
//   getAllUsers,
//   getNumberOfUsers,
//   isUserExists,
//   isEmailExists,
// } from "../firebase/firebase.js";

// let registerForm = document.getElementById("registerForm");
// let playerExistsEl = document.getElementById("player-exists");
// let playerAddedEl = document.getElementById("player-added");
// let userExists = false;

// if (
//   localStorage.getItem("userList") === undefined ||
//   localStorage.getItem("userList") === null ||
//   localStorage.getItem("userList").length === 0
// ) {
//   localStorage.setItem("userList", JSON.stringify(userList));
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
//       playerExistsEl.className = "visible";
//       let OKEl = document.getElementById("OK");
//       OKEl.addEventListener("click", OKFunc);
//       userExists = true;
//       console.log("true");
//       return true;
//     }
//   });
//   return userExists;
// };

// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let first_Name = document.getElementById("firstName").value;
//   let last_Name = document.getElementById("lastName").value;
//   let e_mail = document.getElementById("email").value;
//   let pw = document.getElementById("password").value;

//   // userExists = checkingExists(first_Name, last_Name, e_mail);
//   userExists = checkingExists(first_Name, last_Name, e_mail);

//   if (userExists === false) {
//     const newUser = new User(first_Name, last_Name, e_mail, 0);

//     parsedArray.push({
//       firstName: first_Name,
//       lastName: last_Name,
//       email: e_mail,
//       password: pw,
//       wins: 0,
//     });

//     getNumberOfUsers()
//       .then((res) => {
//         console.log(res + " " + typeof res);
//         addUserWithId(first_Name, last_Name, e_mail, pw, res);
//       })
//       .catch((err) => {
//         console.log("Unsuccessful adding, error:" + err);
//       });

//     console.log(parsedArray);
//     localStorage.setItem("loggedUser", `${first_Name} ${last_Name}`);
//     localStorage.setItem("userList", JSON.stringify(parsedArray));
//     console.log(JSON.parse(localStorage.getItem("userList") || "[]"));

//     console.log("added");

//     playerAddedEl.className = "visible";
//     // let OKEl2 = document.getElementById("OK2");
//     // OKEl2.addEventListener("click", OKFunc);
//     setTimeout(() => {
//       window.location.href = "../game/index.html";
//     }, "1000");
//   }
// });

// const OKFunc = () => {
//   playerExistsEl.className = "hidden";
//   playerAddedEl.className = "hidden";
//   console.log("OK clicked");
//   window.location.href = "../game/index.html";
//   registerForm.reset();
// };
