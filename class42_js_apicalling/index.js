// get api calling - promise

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//async await

async function getUserData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();

  console.log(data);
}

getUserData();

async function getPostData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  let postData = await response.json();

  console.log(postData);
}

getPostData();
