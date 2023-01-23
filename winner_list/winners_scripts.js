import { userList } from "../users/user.js";

const whoWonItem = () => {
  if (localStorage.getItem("whoWon") !== "Winners Status") {
    document.getElementById("winner").innerText =
      localStorage.getItem("whoWon");
  }
};

whoWonItem();

addEventListener("storage", (event) => {
  console.log(window.localStorage.getItem("whoWon"));
});
onstorage = (event) => {
  whoWonItem();
  console.log(window.localStorage.getItem("whoWon"));
};

const setWinnerList = () => {
  userList.sort((a, b) => parseInt(b.wins) - parseInt(a.wins));
  console.log(userList);
  document.getElementById(
    "first-name"
  ).innerText = `${userList[0].firstName} ${userList[0].lastName}`;
  document.getElementById(
    "second-name"
  ).innerText = `${userList[1].firstName} ${userList[1].lastName}`;
  document.getElementById(
    "third-name"
  ).innerText = `${userList[2].firstName} ${userList[2].lastName}`;
  document.getElementById(
    "fourth-name"
  ).innerText = `${userList[3].firstName} ${userList[3].lastName}`;
  document.getElementById(
    "fifth-name"
  ).innerText = `${userList[4].firstName} ${userList[4].lastName}`;
  document.getElementById("first-score").innerText = userList[0].wins;
  document.getElementById("second-score").innerText = userList[1].wins;
  document.getElementById("third-score").innerText = userList[2].wins;
  document.getElementById("fourth-score").innerText = userList[3].wins;
  document.getElementById("fifth-score").innerText = userList[4].wins;
};

setWinnerList();
