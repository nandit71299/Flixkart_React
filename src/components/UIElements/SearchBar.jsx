import React from "react";

import "./SearchBar.css";

export default function TextInput(props) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="text-input"
        placeholder={props.placeholder}
      />
      <div className="text-input-childrens">{props.children}</div>
    </div>
  );
}
