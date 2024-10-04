// let student1 = {
//   name: "chandan",
//   age: 25,
//   roll_no: 121,
//   hubby: ["dance", "singing"],
//   idNo: {
//     first: {
//       privacy: 1434253,
//       all: 3434,
//     },
//     optional: 345,
//   },
// };

// //get value by key
// console.log(student1.roll_no);
// console.log(student1["age"]);

// student1.name = "jatin";

// student1.class = "React";

// console.log(student1);

// console.log(student1.hubby[0]);

// console.log(student1.idNo.first.privacy);

//object destructure

// let employee1 = {
//   id: 122,
//   name: "chandan samantaray",
//   age: 54,
// };

// // let id = employee1.id;
// // let name = employee1.name;

// let { id,name:myName,age } = employee1;
// console.log();

//computed properties

// let price = "myPrice";

// let product1 = {
//   productName: "hp 234",
//   [price]: 34000,
// };

// console.log(product1[price]);

// let products = [
//   {
//     producName: "iphone 15",
//     price: 100000,
//     rating: 4.5,
//     category: "phone",
//   },
//   {
//     producName: "Realme",
//     price: 10000,
//     rating: 4.5,
//     category: "phone",
//   },
//   {
//     producName: "hp 235",
//     price: 450000,
//     rating: 5,
//     category: "laptop",
//   },
//   {
//     producName: "pentab",
//     price: 7000,
//     rating: 2.4,
//     category: "gadgets",
//   },
//   {
//     producName: "Millionare book",
//     price: 499,
//     rating: 4.8,
//     category: "book",
//   },
// ];

// console.log(products.length);

// products.forEach((e, i) => {
//   console.log(e);
// });

// let newProducts = products.filter((e) => {
//   return e.rating > 4;
// });

// console.log(newProducts);

// let newData = products.map((e) => {
//   return { ...e, price: e.price - 200 };
// });

// console.log(newData);

// let phones = products.filter((e) => {
//   return e.category == "phone";
// });

// console.log(phones);
