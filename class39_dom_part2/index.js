// console.log("hii");

// let heading = document.querySelector(".heading");

// console.log(heading);

// heading.classList.add(".heading2");

// let toggle = document.querySelector("button");

// let sideBar = document.querySelector(".parent");
// console.log(sideBar);

// console.log(sideBar.getAttribute("id"));

// sideBar.setAttribute("id", "change");
// console.log(sideBar.getAttribute("id"));

// toggle.addEventListener("click", () => {
//   sideBar.classList.toggle("parent2");
// });

//change image project

let changeImgBtn = document.querySelector("button");

console.log(changeImgBtn);

// let slider = document.querySelector(".img-slider");

// let images = [
//   "https://images.unsplash.com/photo-1726755487183-c7322ae4a3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",

//   "https://images.unsplash.com/photo-1727434032765-9c4df88b6e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",

//   "https://images.unsplash.com/photo-1728177196109-f6d1227c3fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
// ];
// let i = 0;
// // changeImgBtn.addEventListener("click", () => {
// //   if (i <= 2) {
// //     slider.setAttribute("src", images[i]);
// //     i++;
// //   } else {
// //     i = 0;
// //     slider.setAttribute("src", images[i]);
// //     i++;
// //   }
// // });

// setInterval(() => {
//   chnageSider();
// }, 1000);

// function chnageSider() {
//   if (i <= 2) {
//     slider.setAttribute("src", images[i]);
//     i++;
//   } else {
//     i = 0;
//     slider.setAttribute("src", images[i]);
//     i++;
//   }
// }

let box = document.querySelector(".box");

box.innerHTML = "<button>download</button>";
