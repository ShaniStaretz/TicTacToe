import { addUserWithId, addUser } from "../firebase/firebase.js";

export function User(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.wins = 0;
}

const user1 = new User(
  "Idil",
  "Kasuto Kelson",
  "idilkasuto@gmail.com",
  "idil1234"
);
const user2 = new User("Noa", "Said", "noasaid@gmail.com", "noa1234");
const user3 = new User("Liza", "Bresler", "lisabresler@gmail.com", "lisa1234");
const user4 = new User("Moshe", "Cohen", "moshe@gmail.com", "moshe1234");
const user5 = new User("Jack", "Levi", "jack@gmail.com", "jack1234");

// addUser("Idil", "Kasuto Kelson", "idilkasuto@gmail.com", "noa1234");
// addUser("Noa", "Said", "noasaid@gmail.com", "noa1234");
// addUser("Liza", "Bresler", "lisabresler@gmail.com", "lisa1234");
// addUser("Moshe", "Cohen", "moshe@gmail.com", "moshe1234");
// addUser("Jack", "Levi", "jack@gmail.com", "jack1234");

addUserWithId("Idil", "Kasuto Kelson", "idilkasuto2@gmail.com", "idil1234", 1);
addUserWithId("Noa", "Said", "noasaid2@gmail.com", "noa1234", 2);
addUserWithId("Liza", "Bresler", "lisabresler2@gmail.com", "lisa1234", 3);
addUserWithId("Moshe", "Cohen", "moshe2@gmail.com", "moshe1234", 4);
addUserWithId("Jack", "Levi", "jack2@gmail.com", "jack1234", 5);

export const userList = [user1, user2, user3, user4, user5];
