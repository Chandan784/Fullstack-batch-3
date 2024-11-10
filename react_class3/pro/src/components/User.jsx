import React from "react";
import UserName from "./UserName";

function User({ data }) {
  return (
    <div style={{ fontSize: "20px" }}>
      {data.map((e) => {
        return <UserName username={e} />;
      })}
    </div>
  );
}

export default User;
