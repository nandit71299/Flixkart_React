import React from "react";

function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <h1>404 Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
}

export default ErrorPage;
