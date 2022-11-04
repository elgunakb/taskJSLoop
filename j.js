// Task 1

// const data = [
//   { name: "Farid", age: 27, salary: 2046 },
//   { name: "Ceyhun", age: 37, salary: 4356 },
//   { name: "Nizam", age: 23, salary: 3662 },
//   { name: "Elgun", age: 20, salary: 1623 },
// ];

// const result = data.reduce(sumNums);
// function sumNums(total, value) {
//   console.log(total.salary+value.salary);

//   return total.salary + value.salary;

// }
// console.log(result);

// Task 2

const username = "elgun";
const password = "elgun123";

const un = prompt("Enter your username : ");
const pw = prompt("Enter your password : ");


if (username === un && password === pw) {
  alert("You are join!");
} else if (!un && !pw) {
  alert("Please fill the blanks");
} else if (username != un && password != pw) {
  alert("Password or username is incorrect");
}

// Task 3
// const month = prompt("Enter month : ");

// switch (month) {
//   case ("mart", "aprel", "may"):
//     console.log("yaz");
//     break;
//   case ("iyun", "iyul", "avqust"):
//     console.log("Yay ayı");
//     break;
//   case ("sentyabr", "oktyabr", "noyabr"):
//     console.log("Payız ayı");
//     break;
//   case ("dekabr", "yanvar", "fevral"):
//     console.log("Qış ayı");
//     break;
//   default:
//     console.log("yanlish");
//     break;
// }
