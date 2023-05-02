import React from "react";

const RecordButton = ({ recording, onClick }) => (
  <button className="btn record" onClick={onClick}>
    <p>{recording ? "Stop Listening..." : "Start Listening"}</p>
  </button>
);

export default RecordButton;
