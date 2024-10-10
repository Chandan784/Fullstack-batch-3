//sync and async

// console.log("hii");
// console.log("hlw");

//callback

// function fun1() {
//   console.log("i am function1");
// }

// function fun2(fun) {
//   fun();
// }

// fun2(fun1);

// let arr = [1,,3,4,56]

// arr.map(()=>{

// })

//i have to authenticate by mail user then show user data inside our app and then user can buy any product

// function sendMail(fun) {
//   setTimeout(() => {
//     console.log("op sent sucessfully");

//     fun();
//   }, 4000);
// }

// function verifyOtp(fun) {
//   setTimeout(() => {
//     console.log("otp verified and user authenticated");
//     fun();
//   }, 3000);
// }

// function buyProduct() {
//   setTimeout(() => {
//     console.log("product purchased");
//   }, 1000);
// }

// sendMail(() => {
//   verifyOtp(() => {
//     buyProduct();
//   });
// });

//promise

// new Promise((resolve, reject) => {
//   //   resolve([1, 32, 4, 5, 6]);
//   reject("something went wrong");
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((errMsg) => {
//     console.log(errMsg);
//   });

// function sendMail() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//       console.log("op sent sucessfully");
//     }, 4000);
//   });
// }

// function verifyOtp() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//       console.log("otp verified and user authenticated");
//     }, 3000);
//   });
// }

// function buyProduct() {
//   setTimeout(() => {
//     console.log("product purchased");
//   }, 1000);
// }

// sendMail().then(verifyOtp).then(buyProduct);

// async  await

// async function sendMail() {
//   return setTimeout(() => {
//     console.log("op sent sucessfully");
//   }, 4000);
// }

// async function verifyOtp() {
//   return setTimeout(() => {
//     console.log("otp verified and user authenticated");
//   }, 3000);
// }

// async function buyProduct() {
//   return setTimeout(() => {
//     console.log("product purchased");
//   }, 1000);
// }

// async function getData() {
//   await sendMail();
//   await verifyOtp();
//   await buyProduct();
// }

// getData();
