import React from "react";
const Header = () => {
  console.log("header rendered");
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default React.memo(Header);
