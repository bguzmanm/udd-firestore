import React from "react";

function FilmsList(props) {
  return (
    <ul className="list-group">
      {props.children}
    </ul>
  )
}

export { FilmsList }