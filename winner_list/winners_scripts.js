import { getAllUsers } from "../firebase/firebase.js";

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

console.log("before");
let userList;
getAllUsers()
  .then((res) => {
    console.log(res);
    userList = res;
    // console.log("TheUserList: " + JSON.stringify(userList));
    userList.sort((a, b) => parseInt(b.Wins) - parseInt(a.Wins));
    // console.log("TheUserList2: " + JSON.stringify(userList));
    setWinnerList();
  })
  .catch((err) => {
    console.log(err);
  });

console.log("initial list: " + JSON.stringify(userList));

const setWinnerList = () => {
  userList.sort((a, b) => parseInt(b.wins) - parseInt(a.wins));

  console.log("In function: " + JSON.stringify(userList[0]));
  // console.log("0: " + JSON.stringify(userList));
  console.log("0: " + JSON.stringify(userList[0]));
  console.log("0: " + userList[0].FirstName);
  document.getElementById(
    "first-name"
  ).innerText = `${userList[0].FirstName} ${userList[0].LastName}`;
  document.getElementById(
    "second-name"
  ).innerText = `${userList[1].FirstName} ${userList[1].LastName}`;
  document.getElementById(
    "third-name"
  ).innerText = `${userList[2].FirstName} ${userList[2].LastName}`;
  document.getElementById(
    "fourth-name"
  ).innerText = `${userList[3].FirstName} ${userList[3].LastName}`;
  document.getElementById(
    "fifth-name"
  ).innerText = `${userList[4].FirstName} ${userList[4].LastName}`;
  document.getElementById("first-score").innerText = userList[0].Wins;
  document.getElementById("second-score").innerText = userList[1].Wins;
  document.getElementById("third-score").innerText = userList[2].Wins;
  document.getElementById("fourth-score").innerText = userList[3].Wins;
  document.getElementById("fifth-score").innerText = userList[4].Wins;
};

// setWinnerList();

// import { userList } from "../users/user.js";

// const whoWonItem = () => {
//   if (localStorage.getItem("whoWon") !== "Winners Status") {
//     document.getElementById("winner").innerText =
//       localStorage.getItem("whoWon");
//   }
// };

// whoWonItem();

// addEventListener("storage", (event) => {
//   console.log(window.localStorage.getItem("whoWon"));
// });
// onstorage = (event) => {
//   whoWonItem();
//   console.log(window.localStorage.getItem("whoWon"));
// };

// const setWinnerList = () => {
//   userList.sort((a, b) => parseInt(b.wins) - parseInt(a.wins));
//   console.log(userList);
//   document.getElementById(
//     "first-name"
//   ).innerText = `${userList[0].firstName} ${userList[0].lastName}`;
//   document.getElementById(
//     "second-name"
//   ).innerText = `${userList[1].firstName} ${userList[1].lastName}`;
//   document.getElementById(
//     "third-name"
//   ).innerText = `${userList[2].firstName} ${userList[2].lastName}`;
//   document.getElementById(
//     "fourth-name"
//   ).innerText = `${userList[3].firstName} ${userList[3].lastName}`;
//   document.getElementById(
//     "fifth-name"
//   ).innerText = `${userList[4].firstName} ${userList[4].lastName}`;
//   document.getElementById("first-score").innerText = userList[0].wins;
//   document.getElementById("second-score").innerText = userList[1].wins;
//   document.getElementById("third-score").innerText = userList[2].wins;
//   document.getElementById("fourth-score").innerText = userList[3].wins;
//   document.getElementById("fifth-score").innerText = userList[4].wins;
// };

// setWinnerList();
