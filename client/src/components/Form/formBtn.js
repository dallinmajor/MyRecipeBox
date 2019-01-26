import React from "react";

export const FormBtn = ({onClick, text = 'Submit', children}) => (
  <button onClick={onClick} style={{marginBottom: 10 }} className="btn btn-success">
  {text}
  </button>
);