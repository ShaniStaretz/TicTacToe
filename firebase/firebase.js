import { User, userList } from "../users/user.js";

//------Imports from Firebase and configurations:---------

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCujAduB5S1sgx8_jqPY72ZFCQaUkbidnE",
  authDomain: "tictactoe-shecodes.firebaseapp.com",
  projectId: "tictactoe-shecodes",
  storageBucket: "tictactoe-shecodes.appspot.com",
  messagingSenderId: "144899253627",
  appId: "1:144899253627:web:0406a5dc5756e063d789de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const db = getFirestore();

export const addUser = (firstName, lastName, email, password) => {
  async function AddDocument_AutoId() {
    const usersRef = collection(db, "TheUsersList");
    const q = query(usersRef, where("Email", "==", `${email}`));
    const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) => {
    //   console.log("printing:****");
    //   console.log(doc.id, " => ", doc.data());
    // });

    // console.log(JSON.stringify(querySnapshot));
    console.log("length: " + querySnapshot._snapshot.docs.keyedMap.root.size);

    if (querySnapshot._snapshot.docs.keyedMap.root.size === 0) {
      var ref = collection(db, "TheUsersList");

      const docRef = await addDoc(ref, {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
        Wins: 0,
      })
        .then(() => {
          console.log("Data added successfully");
        })
        .catch((err) => {
          console.log("Unsuccessful adding, error:" + err);
        });
    }
  }

  AddDocument_AutoId();
};

// export const addUser = (firstName, lastName, email, password) => {
//   let isExists = false;

//   async function AddDocument_AutoId() {
//     const q = query(collection(db, "TheUsersList"));
//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       //console.log(doc.id, " => ", doc.data());
//       if (doc.data().Email === email) {
//         isExists = true;
//         console.log(
//           "existing: " + isExists + ": " + JSON.stringify(doc.data())
//         );
//         // return; //return didn't work inside foreach
//       }
//     });

//     if (!isExists) {
//       var ref = collection(db, "TheUsersList");

//       const docRef = await addDoc(ref, {
//         FirstName: firstName,
//         LastName: lastName,
//         Email: email,
// Password: password,
// Wins: 0,
//       })
//         .then(() => {
//           console.log("Data added successfully");
//         })
//         .catch((err) => {
//           console.log("Unsuccessful adding, error:" + err);
//         });
//     }
//   }

//   if (!isExists) {
//     AddDocument_AutoId();
//   }
// };

export const addUserWithId = (firstName, lastName, email, password, id) => {
  // let isExists = false;
  console.log("*");
  async function AddDocument_CustomId() {
    console.log("**");

    const usersRef2 = collection(db, "TheUsersList");
    const q2 = query(usersRef2, where("Email", "==", `${email}`));
    const querySnapshot2 = await getDocs(q2);

    // let q2 = query(collection(db, "TheUsersList"));
    // let querySnapshot2 = await getDocs(q2);
    // querySnapshot2.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   //console.log(doc.id, " => ", doc.data());
    //   if (doc.data().Email === email) {
    //     isExists = true;
    //     console.log(
    //       "existing: " + isExists + ": " + JSON.stringify(doc.data())
    //     );
    //     return;
    //   }
    // });

    console.log(id + " " + typeof id);
    let stringId = id.toString();

    if (querySnapshot2._snapshot.docs.keyedMap.root.size === 0) {
      // if (!isExists) {
      var ref2 = doc(db, "TheUsersList", stringId);

      await setDoc(ref2, {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
        Wins: 0,
      })
        .then(() => {
          console.log("Data added successfully");
        })
        .catch((err) => {
          console.log("Unsuccessful adding, error:" + err);
        });
    }
  }
  // if (!isExists) {
  AddDocument_CustomId();
  // }
};

export const getNumberOfUsers = async () => {
  const usersRef4 = collection(db, "TheUsersList");
  const q4 = query(usersRef4);
  const querySnapshot4 = await getDocs(q4);
  let len = querySnapshot4._snapshot.docs.keyedMap.root.size;
  return len;
};

// export const getAllUsers = () => {
//   async function GetADocument_AllUsers() {
//     const q = query(collection(db, "TheUsersList"));

//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   }
//   GetADocument_AllUsers();
// };

export const getAllUsers = async () => {
  let arr = [];
  const usersRef3 = collection(db, "TheUsersList");
  const q3 = query(usersRef3);
  const querySnapshot3 = await getDocs(q3);
  querySnapshot3.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    arr.push(doc.data());
  });
  console.log(arr);
  // return querySnapshot3.docs.map((doc) => doc.data());
  return arr;
};

// export const getOneUserById = (id) => {
//   async function GetADocument() {
//     var ref = doc(db, "TheUsersList", id);
//     const docSnap = await getDoc(ref);
//     console.log("user with id " + id + "is: " + docSnap);

//     if (docSnap.exists()) {
//       return docSnap;
//     } else {
//       console.log("user with id " + id + "doesn't exist");
//     }
//   }
//   GetADocument();
// };

export const getOneUserById = async (id) => {
  console.log("###");
  const usersRef6 = doc(db, "TheUsersList", id);
  const docSnap6 = await getDoc(usersRef6);
  // console.log("user with id " + id + " is: " + JSON.stringify(docSnap6.data()));

  if (docSnap6.exists()) {
    console.log("^^^^^");
    return docSnap6.data();
  } else {
    console.log("user with id " + id + "doesn't exist");
  }
};

export const UpdateAUserById = (
  firstName,
  lastName,
  email,
  password,
  wins,
  id
) => {
  async function UpdateFieldsInADocument() {
    var ref = doc(db, "TheUsersList", id);

    await updateDoc(ref, {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      Wins: wins,
    })
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((err) => {
        console.log("Unsuccessful update, error:" + err);
      });
  }
  UpdateFieldsInADocument();
};

export const UpdateAWinsById = async (id, wins) => {
  var ref = doc(db, "TheUsersList", id);

  await updateDoc(ref, {
    Wins: wins,
  })
    .then(() => {
      console.log("Data updated successfully");
    })
    .catch((err) => {
      console.log("Unsuccessful update, error:" + err);
    });
};

export const deleteById = (id) => {
  async function DeleteDocument() {
    var ref = doc(db, "TheUsersList", id);
    const docSnap = await getDoc(ref);

    if (!docSnap.exists) {
      console.log("User doesn't exist");
    }

    await deleteDoc(ref)
      .then(() => {
        console.log("Data deleted successfully");
      })
      .catch((err) => {
        console.log("Unsuccessful delete, error:" + err);
      });
  }
  DeleteDocument();
};

export const isUserExists = async (email, password) => {
  const usersRef = collection(db, "TheUsersList");
  const q = query(
    usersRef,
    where("Email", "==", `${email}`),
    where("Password", "==", `${password}`)
  );
  const querySnapshot = await getDocs(q);

  let len = querySnapshot._snapshot.docs.keyedMap.root.size;
  console.log("length: " + len);
  const isExist = len === 0 ? false : true;
  console.log(isExist);
  return isExist;
};

export const isEmailExists = async (email) => {
  const usersRef = collection(db, "TheUsersList");
  const q = query(usersRef, where("Email", "==", `${email}`));
  const querySnapshot = await getDocs(q);

  let len = querySnapshot._snapshot.docs.keyedMap.root.size;
  console.log("length: " + len);
  const isExist = len === 0 ? false : true;
  console.log(isExist);
  return isExist;
};

export const getUserByEmailAndPassword = async (email, password) => {
  const usersRef = collection(db, "TheUsersList");
  const q = query(
    usersRef,
    where("Email", "==", `${email}`),
    where("Password", "==", `${password}`)
  );
  const querySnapshot = await getDocs(q);

  let len = querySnapshot._snapshot.docs.keyedMap.root.size;
  console.log("length: " + len);
  const isExist = len === 0 ? false : true;

  if (isExist) {
    let arr = [];
    querySnapshot.forEach((doc) => {
      console.log("data: " + doc.data() + "id is " + doc.id);
      arr.push(doc.data());
      arr.push(doc.id);
    });

    return arr;
  }
  return null;
};
