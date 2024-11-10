// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async function getUserData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");

//   let data = await response.json();

//   let parentDiv = document.querySelector(".parent");
//   data.forEach((element) => {
//     console.log(element);

//     let card = document.createElement("div");

//     let name = document.createElement("h1");
//     let number = document.createElement("h3");
//     let email = document.createElement("p");

//     name.innerHTML = `${element.name}`;
//     number.innerHTML = `${element.phone}`;
//     email.innerHTML = `${element.email}`;

//     card.classList.add("card");
//     card.append(name);
//     card.append(number);
//     card.append(email);

//     parentDiv.append(card);
//   });
// }

// getUserData();

// async function getUserData() {
//   let reposne = await fetch("https://jsonplaceholder.typicode.com/users");

//   let data = await reposne.json();

//   console.log(data);

//   let table = document.querySelector("table");
//   data.forEach((element) => {
//     let tableRow = document.createElement("tr");

//     let td1 = document.createElement("td");
//     td1.innerHTML = `${element.name}`;
//     let td2 = document.createElement("td");
//     td2.innerHTML = `${element.phone}`;
//     let td3 = document.createElement("td");
//     td3.innerHTML = `${element.email}`;
//     let td4 = document.createElement("td");
//     td4.innerHTML = `${element.website}`;

//     tableRow.append(td1);
//     tableRow.append(td2);
//     tableRow.append(td3);
//     tableRow.append(td4);

//     table.append(tableRow);
//   });
// }

// getUserData();

//data send to api with fetch

// async function sendUserData() {
//   let email = document.querySelector("#email").value;
//   let password = document.querySelector("#pass").value;

//   console.log(email, password);

//   fetch("/user", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       headers: "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });
// }

// let signUp = document.querySelector("#signup");

// signUp.addEventListener("click", (e) => {
//   e.preventDefault();

//   sendUserData();
// });
