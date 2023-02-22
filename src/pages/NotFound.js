import React from "react";

function NotFound() {
  return (
    <div
      style={{
        height: "85vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{color:"grey"}}>
        <h2>404.</h2>
        <h4>Page Not Found!</h4>
      </p>
    </div>
  );
}

export default NotFound;
