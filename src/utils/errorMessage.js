import React from "react";

export const errorMessage = (error) => {
  return (
    <p style={{ fontSize: "2rem", textAlign: "center", color: "red" }}>
      {error}
    </p>
  );
};

export const authErrorMessage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "max-content",
          backgroundColor: "yellow",
        }}
      >
        <p style={{ fontSize: "2rem", textAlign: "center", color: "red" }}>
          Your authorization is expired. Please login again.
        </p>
      </div>
    </div>
  );
};
