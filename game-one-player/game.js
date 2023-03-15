import {
  getOneUserById,
  UpdateAUserById,
  UpdateAWinsById,
} from "../firebase/firebase.js";
import { User } from "../users/user.js";

let turn = "X";
let isX = true;
let count = 0;
document.getElementById("XorO").innerHTML = "Lets' play! X Begins.";
localStorage.setItem("whoWon", "Winners Status");
let resetButton = document.getElementById("reset");
let pointsOfLoggedIn;
let currentLoggedIn;
let isLogged = false;

let placesArr = [
  "r1c1",
  "r1c2",
  "r1c3",
  "r2c1",
  "r2c2",
  "r2c3",
  "r3c1",
  "r3c2",
  "r3c3",
];

let remainingArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let xArray = [];
let oArray = [];
let isWin = false;

let r1c1Element = document.getElementById("r1c1");
let r1c2Element = document.getElementById("r1c2");
let r1c3Element = document.getElementById("r1c3");
let r2c1Element = document.getElementById("r2c1");
let r2c2Element = document.getElementById("r2c2");
let r2c3Element = document.getElementById("r2c3");
let r3c1Element = document.getElementById("r3c1");
let r3c2Element = document.getElementById("r3c2");
let r3c3Element = document.getElementById("r3c3");

// const changeTurn = () => {
//   isX = !isX;
//   console.log(isX);
//   if (isX) {
//     turn = "X";
//   } else {
//     turn = "O";
//     let input = computersTurn();
//     console.log("the input " + input);
//     if (count < 8) {
//       play(input);
//     }
//   }
//   if (count !== 0) {
//     document.getElementById("XorO").innerHTML = `It's ${turn}'s turn`;
//     didWin();
//   }
// };

const changeTurn = () => {
  isX = !isX;
  console.log(isX);
  if (isX) {
    turn = "X";
  } else {
    turn = "O";
    let input = computersTurn();
    console.log("the input " + input);
    if (count < 8) {
      play(input);
    }
  }
  if (count !== 0) {
    document.getElementById("XorO").innerHTML = `It's ${turn}'s turn`;
  }
};

let computersTurn = () => {
  console.log("computer");
  console.log(checkBlockingX());
  let arrLength = remainingArr.length;
  console.log(arrLength);
  let idx = Math.floor(Math.random() * arrLength);
  console.log("idx " + idx);
  let key = remainingArr[idx];
  let value = placesArr[key];
  console.log(key + ": " + value);
  let block = checkBlockingX();
  let canOWin = checkNextOForWin();
  console.log("x blocking: " + block + " o can win? " + canOWin);
  if (
    block === -1 &&
    canOWin === -1 &&
    !oArray.includes(4) &&
    remainingArr.includes(4)
  ) {
    value = "r2c2";
  }
  if (block === -1 && canOWin !== -1) {
    value = placesArr[canOWin];
    console.log(value);
  }
  if (block !== -1) {
    value = placesArr[block];
  }

  return value;
};

const playCaseCheck = (idInput, pushToArray) => {
  let indexNumber = placesArr.indexOf(idInput);
  remainingArr.splice(remainingArr.indexOf(indexNumber), 1);
  if (turn === "X") {
    xArray.push(pushToArray);
  }
  if (turn === "O") {
    oArray.push(pushToArray);
  }
};

const play = (idInput) => {
  console.log(idInput);
  count++;
  let indexNumber;
  switch (idInput) {
    case "r1c1":
      if (r1c1Element.innerHTML === "") {
        playCaseCheck("r1c1", 0);
        r1c1Element.innerHTML = turn;
      }
      break;
    case "r1c2":
      if (r1c2Element.innerHTML === "") {
        playCaseCheck("r1c2", 1);
        r1c2Element.innerHTML = turn;
      }
      break;
    case "r1c3":
      if (r1c3Element.innerHTML === "") {
        playCaseCheck("r1c3", 2);
        r1c3Element.innerHTML = turn;
      }
      break;
    case "r2c1":
      if (r2c1Element.innerHTML === "") {
        playCaseCheck("r2c1", 3);
        r2c1Element.innerHTML = turn;
      }
      break;
    case "r2c2":
      if (r2c2Element.innerHTML === "") {
        playCaseCheck("r2c2", 4);
        r2c2Element.innerHTML = turn;
      }
      break;
    case "r2c3":
      if (r2c3Element.innerHTML === "") {
        playCaseCheck("r2c3", 5);
        r2c3Element.innerHTML = turn;
      }
      break;
    case "r3c1":
      if (r3c1Element.innerHTML === "") {
        playCaseCheck("r3c1", 6);
        r3c1Element.innerHTML = turn;
      }
      break;
    case "r3c2":
      if (r3c2Element.innerHTML === "") {
        playCaseCheck("r3c2", 7);
        r3c2Element.innerHTML = turn;
      }
      break;
    case "r3c3":
      if (r3c3Element.innerHTML === "") {
        playCaseCheck("r3c3", 8);
        r3c3Element.innerHTML = turn;
      }
      break;
  }
  console.log(count);
  console.log("remainingArr: " + remainingArr);
  console.log("xArray: " + xArray);
  console.log("oArray: " + oArray);
  if (count === 9) {
    document.getElementsByClassName("panel")[0].innerHTML =
      "It's a tie! No one wins! A rematch?";
    localStorage.setItem("whoWon", "It's a tie! No one wins! A rematch?");
  }
  if (!isWin && count < 9) {
    didWin();
    if (!isWin) {
      changeTurn();
    }
  }
};

r1c1Element.addEventListener("click", function () {
  if (!xArray.includes(0) && !oArray.includes(0)) {
    play("r1c1");
  }
});
r1c2Element.addEventListener("click", function () {
  if (!xArray.includes(1) && !oArray.includes(1)) {
    play("r1c2");
  }
});
r1c3Element.addEventListener("click", function () {
  if (!xArray.includes(2) && !oArray.includes(2)) {
    play("r1c3");
  }
});
r2c1Element.addEventListener("click", function () {
  if (!xArray.includes(3) && !oArray.includes(3)) {
    play("r2c1");
  }
});
r2c2Element.addEventListener("click", function () {
  if (!xArray.includes(4) && !oArray.includes(4)) {
    play("r2c2");
  }
});
r2c3Element.addEventListener("click", function () {
  if (!xArray.includes(5) && !oArray.includes(5)) {
    play("r2c3");
  }
});
r3c1Element.addEventListener("click", function () {
  if (!xArray.includes(6) && !oArray.includes(6)) {
    play("r3c1");
  }
});
r3c2Element.addEventListener("click", function () {
  if (!xArray.includes(7) && !oArray.includes(7)) {
    play("r3c2");
  }
});
r3c3Element.addEventListener("click", function () {
  if (!xArray.includes(8) && !oArray.includes(8)) {
    play("r3c3");
  }
});

const didWin = () => {
  let r1c1 = r1c1Element.innerText;
  let r1c2 = r1c2Element.innerText;
  let r1c3 = r1c3Element.innerText;
  let r2c1 = r2c1Element.innerText;
  let r2c2 = r2c2Element.innerText;
  let r2c3 = r2c3Element.innerText;
  let r3c1 = r3c1Element.innerText;
  let r3c2 = r3c2Element.innerText;
  let r3c3 = r3c3Element.innerText;

  console.log("using didwin*****");
  switch (true) {
    case r1c1 === r1c2 && r1c1 === r1c3 && r1c1 !== "":
    case r1c1 === r2c1 && r1c1 === r3c1 && r1c1 !== "":
    case r1c1 === r2c2 && r1c1 === r3c3 && r1c1 !== "":
      console.log("**********");
      alertWin(r1c1);
      endGame();
      isWin = true;
      break;
    case r2c1 === r2c2 && r2c1 === r2c3 && r2c1 !== "":
    case r1c2 === r2c2 && r1c2 === r3c2 && r1c2 !== "":
      console.log("**********");
      alertWin(r2c2);
      endGame();
      isWin = true;
      break;
    case r1c3 === r2c3 && r1c3 === r3c3 && r1c3 !== "":
    case r1c3 === r2c2 && r1c3 === r3c1 && r3c1 !== "":
      console.log("**********");
      alertWin(r1c3);
      endGame();
      isWin = true;
      break;
    case r3c1 === r3c2 && r3c1 === r3c3 && r3c1 !== "":
      console.log("**********");
      alertWin(r3c1);
      endGame();
      isWin = true;
      break;
    case count === 9:
      console.log("~~~~~~~~~*");
      document.getElementsByClassName("panel")[0].innerHTML =
        "It's a tie! No one wins! A rematch?";
      localStorage.setItem("whoWon", "It's a tie! No one wins! A rematch?");
    default:
      console.log("no win");
      return false;
    // setTimeout(function () {
    //   alert(`It's a tie! No one wins! A rematch?`);
    // }, 0);
  }
};

const alertWin = (whoWon) => {
  console.log("alert win with updated points: " + pointsOfLoggedIn);
  document.getElementsByClassName(
    "panel"
  )[0].innerHTML = `We have a winner! ${whoWon} WON!!!`;
  localStorage.setItem(
    "whoWon",
    `We have a winner! ${whoWon} WON!!! A rematch?`
  );
  console.log("increasing points!!!");
  pointsOfLoggedIn++;
  updateWinPointsInDb();
};
// setTimeout(function () {
//   alert(`We have a winner! ${whoWon} WON!!!`);
// }, 0);

const endGame = () => {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (document.getElementById("r" + i + "c" + j).innerText === "") {
        document.getElementById("r" + i + "c" + j).innerHTML = "-";
      }
    }
    for (let j = 1; j <= 3; j++) {
      if (document.getElementById("r" + i + "c" + j).innerText === "") {
        document.getElementById("r" + i + "c" + j).innerHTML = "-";
      }
    }
    for (let j = 1; j <= 3; j++) {
      if (document.getElementById("r" + i + "c" + j).innerText === "") {
        document.getElementById("r" + i + "c" + j).innerHTML = "-";
      }
    }
  }
};

const reset = () => {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      document.getElementById("r" + i + "c" + j).innerHTML = "";
    }
    for (let j = 1; j <= 3; j++) {
      document.getElementById("r" + i + "c" + j).innerHTML = "";
    }
    for (let j = 1; j <= 3; j++) {
      document.getElementById("r" + i + "c" + j).innerHTML = "";
    }
  }
  turn = "X";
  isX = true;
  count = 0;
  document.getElementById("XorO").innerHTML = "Lets' play! X Begins.";
  localStorage.setItem("whoWon", "Winners Status");
  remainingArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  xArray = [];
  oArray = [];
  isWin = false;
};

resetButton.addEventListener("click", (e) => {
  reset();
});

const isLoggedIn = () => {
  let loggedUser = localStorage.getItem("loggedUser");
  console.log("LoggedUser: " + loggedUser);
  if (loggedUser) {
    return true;
  }
  return false;
};

const startingPoint = () => {
  if (
    localStorage.getItem("loggedUserId") !== null &&
    pointsOfLoggedIn === undefined
  ) {
    let loggedUserId = localStorage.getItem("loggedUserId").toString();
    console.log(loggedUserId + " type of " + typeof loggedUserId);
    let currentUser;
    getOneUserById(loggedUserId)
      .then((res) => {
        console.log("res: " + JSON.stringify(res));
        currentUser = res;
        pointsOfLoggedIn = currentUser.Wins;
        console.log(pointsOfLoggedIn);
        currentLoggedIn = new User();
        currentLoggedIn.firstName = currentUser.FirstName;
        currentLoggedIn.lastName = currentUser.LastName;
        currentLoggedIn.email = currentUser.Email;
        currentLoggedIn.password = currentUser.Password;
        currentLoggedIn.wins = pointsOfLoggedIn;
        console.log("starting with: " + JSON.stringify(currentLoggedIn));
        isLogged = true;
      })
      .catch((err) => {
        console.log("Unsuccessful adding, error:" + err);
      });
  }
};
startingPoint();

const updateWinPointsInDb = () => {
  console.log(JSON.stringify(currentLoggedIn));
  if (isLogged) {
    let id = localStorage.getItem("loggedUserId").toString();
    let wins = pointsOfLoggedIn;
    UpdateAWinsById(id, wins)
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((err) => {
        console.log("Unsuccessful updating user: " + err);
      });
  }
};

let blockXWin = (a, b, c) => {
  if (xArray.includes(a) && xArray.includes(b) && remainingArr.includes(c)) {
    return c;
  }
  return -1;
};

let checkBlockingX = () => {
  switch (true) {
    case blockXWin(0, 1, 2) != -1:
      return 2;
    case blockXWin(1, 2, 0) != -1:
      return 0;
    case blockXWin(0, 2, 1) != -1:
      return 1;
    case blockXWin(3, 4, 5) != -1:
      return 5;
    case blockXWin(3, 5, 4) != -1:
      return 4;
    case blockXWin(4, 5, 3) != -1:
      return 3;
    case blockXWin(6, 7, 8) != -1:
      return 8;
    case blockXWin(6, 8, 7) != -1:
      return 7;
    case blockXWin(7, 8, 6) != -1:
      return 6;
    case blockXWin(0, 3, 6) != -1:
      return 6;
    case blockXWin(0, 6, 3) != -1:
      return 3;
    case blockXWin(3, 6, 0) != -1:
      return 0;
    case blockXWin(1, 4, 7) != -1:
      return 7;
    case blockXWin(1, 7, 4) != -1:
      return 4;
    case blockXWin(4, 7, 1) != -1:
      return 1;
    case blockXWin(2, 5, 8) != -1:
      return 8;
    case blockXWin(2, 8, 5) != -1:
      return 5;
    case blockXWin(5, 8, 2) != -1:
      return 2;
    case blockXWin(0, 4, 8) != -1:
      return 8;
    case blockXWin(0, 8, 4) != -1:
      return 4;
    case blockXWin(4, 8, 0) != -1:
      return 0;
    case blockXWin(2, 4, 6) != -1:
      return 6;
    case blockXWin(2, 6, 4) != -1:
      return 4;
    case blockXWin(4, 6, 2) != -1:
      return 2;
    default:
      return -1;
  }
};

let nextOForWin = (a, b, c) => {
  if (oArray.includes(a) && oArray.includes(b) && remainingArr.includes(c)) {
    return c;
  }
  return -1;
};

let checkNextOForWin = () => {
  switch (true) {
    case nextOForWin(0, 1, 2) != -1:
      return 2;
    case nextOForWin(1, 2, 0) != -1:
      return 0;
    case nextOForWin(0, 2, 1) != -1:
      return 1;
    case nextOForWin(3, 4, 5) != -1:
      return 5;
    case nextOForWin(3, 5, 4) != -1:
      return 4;
    case nextOForWin(4, 5, 3) != -1:
      return 3;
    case nextOForWin(6, 7, 8) != -1:
      return 8;
    case nextOForWin(6, 8, 7) != -1:
      return 7;
    case nextOForWin(7, 8, 6) != -1:
      return 6;
    case nextOForWin(0, 3, 6) != -1:
      return 6;
    case nextOForWin(0, 6, 3) != -1:
      return 3;
    case nextOForWin(3, 6, 0) != -1:
      return 0;
    case nextOForWin(1, 4, 7) != -1:
      return 7;
    case nextOForWin(1, 7, 4) != -1:
      return 4;
    case nextOForWin(4, 7, 1) != -1:
      return 1;
    case nextOForWin(2, 5, 8) != -1:
      return 8;
    case nextOForWin(2, 8, 5) != -1:
      return 5;
    case nextOForWin(5, 8, 2) != -1:
      return 2;
    case nextOForWin(0, 4, 8) != -1:
      return 8;
    case nextOForWin(0, 8, 4) != -1:
      return 4;
    case nextOForWin(4, 8, 0) != -1:
      return 0;
    case nextOForWin(2, 4, 6) != -1:
      return 6;
    case nextOForWin(2, 6, 4) != -1:
      return 4;
    case nextOForWin(4, 6, 2) != -1:
      return 2;
    default:
      return -1;
  }
};
