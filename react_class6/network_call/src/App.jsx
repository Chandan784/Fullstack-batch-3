import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");

      let myData = await response.json();

      console.log(myData);

      setData(myData);
    }

    getData();
  }, []);

  return (
    <>
      <div>
        {data.map((singleData) => {
          return <Card singleData={singleData} />;
        })}
      </div>
    </>
  );
}

export default App;
