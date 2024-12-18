import { createAsyncThunk } from "@reduxjs/toolkit";

export let getAllUser = createAsyncThunk("user/getAllUser", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();

  return data;
});

// export const getAllBlogs = createAsyncThunk("blog/getAllBlogs", async () => {
//     let response = await fetch("/api/v1/blogs/all-blog");
//     let data = await response.json();
//     console.log(data);
//     return data.blogs;
//   });
