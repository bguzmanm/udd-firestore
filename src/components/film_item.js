import React from "react";

function FilmItem(props) {
  return (
    <li className="list-group-item" key={props}>
      <span>{props.name}</span> - <span className="text-secondary">{props.category}</span>
    </li>
  )
}

export { FilmItem }