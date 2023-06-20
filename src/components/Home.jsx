import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome to home</h1>
      <Link to="/ProductList"> click here to view products</Link>
    </div>
  );
}

export default Home;
