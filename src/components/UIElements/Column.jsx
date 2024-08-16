import React from "react";

import "./Column.css";
export default function Column(props) {
  return (
    <div className="column-container">
      <h6 className="column-title">{props.data.title}</h6>
      {props.data.links &&
        props.data.links.map((element, index) => {
          return (
            <span key={index}>
              <a className="column-links" href={element.url}>
                {element.label}
              </a>
            </span>
          );
        })}
      {props.data.content && (
        <div>
          <p className="column-content">{props.data.content}</p>
        </div>
      )}
    </div>
  );
}
