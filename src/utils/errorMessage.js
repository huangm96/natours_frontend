import React from "react";

export const errorMessage = (error) => {
  return (
    <p style={{ fontSize: "2rem", textAlign: "center", color: "red" }}>
      {error}
    </p>
  );
};
