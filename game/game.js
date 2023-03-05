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

let r1c1Element = document.getElementById("r1c1");
let r1c2Element = document.getElementById("r1c2");
let r1c3Element = document.getElementById("r1c3");
let r2c1Element = document.getElementById("r2c1");
let r2c2Element = document.getElementById("r2c2");
let r2c3Element = document.getElementById("r2c3");
let r3c1Element = document.getElementById("r3c1");
let r3c2Element = document.getElementById("r3c2");
let r3c3Element = document.getElementById("r3c3");

const changeTurn = () => {
  isX = !isX;
  if (isX) {
    turn = "X";
  } else {
    turn = "O";
  }
  if (count !== 0) {
    document.getElementById("XorO").innerHTML = `It's ${turn}'s turn`;
  }

  didWin();
};

const play = (idInput) => {
  count++;
  switch (idInput) {
    case "r1c1":
      if (r1c1Element.innerHTML === "") {
        r1c1Element.innerHTML = turn;
      }
      break;
    case "r1c2":
      if (r1c2Element.innerHTML === "") {
        r1c2Element.innerHTML = turn;
      }
      break;
    case "r1c3":
      if (r1c3Element.innerHTML === "") {
        r1c3Element.innerHTML = turn;
      }
      break;
    case "r2c1":
      if (r2c1Element.innerHTML === "") {
        r2c1Element.innerHTML = turn;
      }
      break;
    case "r2c2":
      if (r2c2Element.innerHTML === "") {
        r2c2Element.innerHTML = turn;
      }
      break;
    case "r2c3":
      if (r2c3Element.innerHTML === "") {
        r2c3Element.innerHTML = turn;
      }
      break;
    case "r3c1":
      if (r3c1Element.innerHTML === "") {
        r3c1Element.innerHTML = turn;
      }
      break;
    case "r3c2":
      if (r3c2Element.innerHTML === "") {
        r3c2Element.innerHTML = turn;
      }
      break;
    case "r3c3":
      if (r3c3Element.innerHTML === "") {
        r3c3Element.innerHTML = turn;
      }
      break;
  }
  changeTurn();
};

r1c1Element.addEventListener("click", function () {
  play("r1c1");
});
r1c2Element.addEventListener("click", function () {
  play("r1c2");
});
r1c3Element.addEventListener("click", function () {
  play("r1c3");
});
r2c1Element.addEventListener("click", function () {
  play("r2c1");
});
r2c2Element.addEventListener("click", function () {
  play("r2c2");
});
r2c3Element.addEventListener("click", function () {
  play("r2c3");
});
r3c1Element.addEventListener("click", function () {
  play("r3c1");
});
r3c2Element.addEventListener("click", function () {
  play("r3c2");
});
r3c3Element.addEventListener("click", function () {
  play("r3c3");
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

  switch (true) {
    case r1c1 === r1c2 && r1c1 === r1c3 && r1c1 !== "":
    case r1c1 === r2c1 && r1c1 === r3c1 && r1c1 !== "":
    case r1c1 === r2c2 && r1c1 === r3c3 && r1c1 !== "":
      alertWin(r1c1);
      endGame();
      break;
    case r2c1 === r2c2 && r2c1 === r2c3 && r2c1 !== "":
    case r1c2 === r2c2 && r1c2 === r3c2 && r1c2 !== "":
      alertWin(r2c2);
      endGame();
      break;
    case r1c3 === r2c3 && r1c3 === r3c3 && r1c3 !== "":
    case r1c3 === r2c2 && r1c3 === r3c1 && r3c1 !== "":
      alertWin(r1c3);
      endGame();
      break;
    case r3c1 === r3c2 && r3c1 === r3c3 && r3c1 !== "":
      alertWin(r3c1);
      endGame();
      break;
    case count === 9:
      document.getElementsByClassName("panel")[0].innerHTML =
        "It's a tie! No one wins! A rematch?";
      localStorage.setItem("whoWon", "It's a tie! No one wins! A rematch?");
    // setTimeout(function () {
    //   alert(`It's a tie! No one wins! A rematch?`);
    // }, 0);
  }
};

const alertWin = (whoWon) => {
  document.getElementsByClassName(
    "panel"
  )[0].innerHTML = `We have a winner! ${whoWon} WON!!!`;
  localStorage.setItem(
    "whoWon",
    `We have a winner! ${whoWon} WON!!! A rematch?`
  );
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
