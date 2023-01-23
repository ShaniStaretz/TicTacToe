function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.wins = 0;
}

const user1 = new User("Idil", "Kasuto Kelson", "idilkasuto@gmail.com");
const user2 = new User("Noa", "She Codes", "noa@gmail.com");
const user3 = new User("Liza", "Bresler", "lisabresler@gmail.com");
const user4 = new User("Moshe", "Cohen", "moshe@gmail.com");
const user5 = new User("Jack", "Levi", "jack@gmail.com");
user1.wins = 5;
user2.wins = 25;
user3.wins = 10;
user4.wins = 0;
user5.wins2;

export const userList = [user1, user2, user3, user4, user5];
