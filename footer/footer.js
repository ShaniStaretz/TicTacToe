const isLoginExpired = () => {
  let storedDateString = localStorage.getItem("loginDay");
  let storedDate;
  if (storedDateString !== null) {
    storedDate = storedDateString.split(",");
  }

  console.log(storedDate);
  let currentDate = new Date();

  if (
    storedDate !== undefined &&
    (currentDate.getDate() != storedDate[0] ||
      currentDate.getMonth() != storedDate[1] ||
      currentDate.getFullYear() != storedDate[2])
  ) {
    console.log(currentDate.getDate() + " " + storedDate[0]);
    console.log(currentDate.getMonth() + " " + storedDate[1]);
    console.log(currentDate.getFullYear() + " " + storedDate[2]);

    localStorage.removeItem("loggedUserId");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loginDay");
  }
};

isLoginExpired();
