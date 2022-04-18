import React from "react";

const Home = () => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div>
      <h2>Private home page.</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
