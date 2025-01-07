import React from "react";

export default function SlccGEGoal({ goal, text, link }) {
  return (
    <>
      <div className="slcc-ge-goal">
        <p>
          <strong>{goal}</strong> {text}
        </p>
      </div>
    </>
  );
}
