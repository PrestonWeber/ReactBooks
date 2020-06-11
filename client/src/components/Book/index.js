import React from "react";

export default function Book(props) {
  let description = props.descriptions;
  let minDesc = "No description available.";
  if (description !== "" && description !== undefined) {
    minDesc = description.subString(0, 400) + "...";
  }

  return (
    <div className="card">
      <div className="row">
        <div className="col-2">
          <img src={props.img} className="card-img" alt={props.title}></img>
        </div>
        <div className="card-body col-10">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{minDesc}</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Author: {props.author}</li>
        <li className="list-group-item">Published: {props.publishedDate}</li>
      </ul>
      <div className="card-body">
        <button
          className="btn btn-primary"
          value={props.button}
          onClick={
            props.button === "add"
              ? e => props.addBook(e, props.id)
              : () => props.deleteBook(props._id)
          }
        >
          {props.button === "add"
            ? "Add to Collection"
            : "Delete from Collection"}
        </button>
        <a href={props.link} className="card-link">
          Go to book
        </a>
      </div>
    </div>
  );
}
