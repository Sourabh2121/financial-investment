import React from "react";
import { ReactTyped } from "react-typed";

export default function TypingAnimation() {
  return (
    <div
      style={{
        fontSize: "3.5rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
      className="text-sub-head"
    >
      <ReactTyped
        strings={["Blue Swan Investments"]}
        typeSpeed={200}
        backSpeed={80}
        loop
        className=""
      />
    </div>
  );
}
