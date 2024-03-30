import React from "react";
import { Link } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="not-found">
      <h1>Error 404 Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default ErrorElement;
