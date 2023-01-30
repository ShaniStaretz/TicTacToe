import { userList, User } from "../users/user.js";

let registerForm = document.getElementById("registerForm");
let playerExistsEl = document.getElementById("player-exists");
let playerAddedEl = document.getElementById("player-added");

if (
  localStorage.getItem("userList") === undefined ||
  localStorage.getItem("userList").length === 0
) {
  localStorage.setItem("userList", JSON.stringify(userList));
  console.log("done");
}

let userArray = localStorage.getItem("userList");
let parsedArray = JSON.parse(userArray);
console.log(parsedArray);
// console.log(parsedArray[0]);
console.log(typeof parsedArray);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let first_Name = document.getElementById("firstName").value;
  let last_Name = document.getElementById("lastName").value;
  let e_mail = document.getElementById("email").value;

  let userExists = false;

  userList.forEach((user) => {
    if (
      user.firstName === first_Name &&
      user.lastName === last_Name &&
      user.email === e_mail
    ) {
      console.log("exits");
      playerExistsEl.className = "visible";
      let OKEl = document.getElementById("OK");
      OKEl.addEventListener("click", OKFunc);
      userExists = true;
      return;
    }
  });

  if (userExists === false) {
    console.log(first_Name + " " + last_Name + " " + e_mail);
    // const newUser = new User(first_Name, last_Name, e_mail,0);

    parsedArray.push({
      firstName: first_Name,
      lastName: last_Name,
      email: e_mail,
      wins: 0,
    });
    console.log(parsedArray);
    localStorage.setItem("userList", JSON.stringify(parsedArray));
    console.log(JSON.parse(localStorage.getItem("userList") || "[]"));

    console.log("added");

    playerAddedEl.className = "visible";
    // let OKEl2 = document.getElementById("OK2");
    // OKEl2.addEventListener("click", OKFunc);
    setTimeout(() => {
      window.location.href = "../game/index.html";
    }, "1000");
  }
});

const OKFunc = () => {
  playerExistsEl.className = "hidden";
  playerAddedEl.className = "hidden";
  console.log("OK clicked");
  window.location.href = "../game/index.html";
  registerForm.reset();
};
