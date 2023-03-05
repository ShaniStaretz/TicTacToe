// let turn = "X";
// let isX = true;
// let count = 0;
// document.getElementById("XorO").innerHTML = "Lets' play! X Begins.";
// localStorage.setItem("whoWon", "Winners Status");
// let resetButton = document.getElementById("reset");

// const changeTurn = () => {
//   isX = !isX;
//   if (isX) {
//     turn = "X";
//   } else {
//     turn = "O";
//   }
//   if (count !== 0) {
//     document.getElementById("XorO").innerHTML = `It's ${turn}'s turn`;
//   }

//   didWin();
// };

// const play = (idInput) => {
//   count++;
//   switch (idInput) {
//     case "r1c1":
//       if (document.getElementById("r1c1").innerHTML === "") {
//         document.getElementById("r1c1").innerHTML = turn;
//       }
//       break;
//     case "r1c2":
//       if (document.getElementById("r1c2").innerHTML === "") {
//         document.getElementById("r1c2").innerHTML = turn;
//       }
//       break;
//     case "r1c3":
//       if (document.getElementById("r1c3").innerHTML === "") {
//         document.getElementById("r1c3").innerHTML = turn;
//       }
//       break;
//     case "r2c1":
//       if (document.getElementById("r2c1").innerHTML === "") {
//         document.getElementById("r2c1").innerHTML = turn;
//       }
//       break;
//     case "r2c2":
//       if (document.getElementById("r2c2").innerHTML === "") {
//         document.getElementById("r2c2").innerHTML = turn;
//       }
//       break;
//     case "r2c3":
//       if (document.getElementById("r2c3").innerHTML === "") {
//         document.getElementById("r2c3").innerHTML = turn;
//       }
//       break;
//     case "r3c1":
//       if (document.getElementById("r3c1").innerHTML === "") {
//         document.getElementById("r3c1").innerHTML = turn;
//       }
//       break;
//     case "r3c2":
//       if (document.getElementById("r3c2").innerHTML === "") {
//         document.getElementById("r3c2").innerHTML = turn;
//       }
//       break;
//     case "r3c3":
//       if (document.getElementById("r3c3").innerHTML === "") {
//         document.getElementById("r3c3").innerHTML = turn;
//       }
//       break;
//   }
//   changeTurn();
// };

// const didWin = () => {
//   let r1c1 = document.getElementById("r1c1").innerText;
//   let r1c2 = document.getElementById("r1c2").innerText;
//   let r1c3 = document.getElementById("r1c3").innerText;
//   let r2c1 = document.getElementById("r2c1").innerText;
//   let r2c2 = document.getElementById("r2c2").innerText;
//   let r2c3 = document.getElementById("r2c3").innerText;
//   let r3c1 = document.getElementById("r3c1").innerText;
//   let r3c2 = document.getElementById("r3c2").innerText;
//   let r3c3 = document.getElementById("r3c3").innerText;

//   switch (true) {
//     case r1c1 === r1c2 && r1c1 === r1c3 && r1c1 !== "":
//     case r1c1 === r2c1 && r1c1 === r3c1 && r1c1 !== "":
//     case r1c1 === r2c2 && r1c1 === r3c3 && r1c1 !== "":
//       alertWin(r1c1);
//       endGame();
//       break;
//     case r2c1 === r2c2 && r2c1 === r2c3 && r2c1 !== "":
//     case r1c2 === r2c2 && r1c2 === r3c2 && r1c2 !== "":
//       alertWin(r2c2);
//       endGame();
//       break;
//     case r1c3 === r2c3 && r1c3 === r3c3 && r1c3 !== "":
//     case r1c3 === r2c2 && r1c3 === r3c1 && r3c1 !== "":
//       alertWin(r1c3);
//       endGame();
//       break;
//     case r3c1 === r3c2 && r3c1 === r3c3 && r3c1 !== "":
//       alertWin(r3c1);
//       endGame();
//       break;
//     case count === 9:
//       document.getElementsByClassName("panel")[0].innerHTML =
//         "It's a tie! No one wins! A rematch?";
//       localStorage.setItem("whoWon", "It's a tie! No one wins! A rematch?");
//     // setTimeout(function () {
//     //   alert(`It's a tie! No one wins! A rematch?`);
//     // }, 0);
//   }
// };

// const alertWin = (whoWon) => {
//   document.getElementsByClassName(
//     "panel"
//   )[0].innerHTML = `We have a winner! ${whoWon} WON!!!`;
//   localStorage.setItem(
//     "whoWon",
//     `We have a winner! ${whoWon} WON!!! A rematch?`
//   );
// };
// // setTimeout(function () {
// //   alert(`We have a winner! ${whoWon} WON!!!`);
// // }, 0);

// const endGame = () => {
//   for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       if (document.getElementById("r" + i + "c" + j).innerText === "") {
//         document.getElementById("r" + i + "c" + j).innerHTML = "-";
//       }
//     }
//     for (let j = 1; j <= 3; j++) {
//       if (document.getElementById("r" + i + "c" + j).innerText === "") {
//         document.getElementById("r" + i + "c" + j).innerHTML = "-";
//       }
//     }
//     for (let j = 1; j <= 3; j++) {
//       if (document.getElementById("r" + i + "c" + j).innerText === "") {
//         document.getElementById("r" + i + "c" + j).innerHTML = "-";
//       }
//     }
//   }
// };

// const reset = () => {
//   for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       document.getElementById("r" + i + "c" + j).innerHTML = "";
//     }
//     for (let j = 1; j <= 3; j++) {
//       document.getElementById("r" + i + "c" + j).innerHTML = "";
//     }
//     for (let j = 1; j <= 3; j++) {
//       document.getElementById("r" + i + "c" + j).innerHTML = "";
//     }
//   }
//   turn = "X";
//   isX = true;
//   count = 0;
//   document.getElementById("XorO").innerHTML = "Lets' play! X Begins.";
//   localStorage.setItem("whoWon", "Winners Status");
// };

// resetButton.addEventListener("click", (e) => {
//   reset();
// });
