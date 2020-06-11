import React from "react";
import "./DeleteBtn.css";

DeleteBtn = props => {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
            X
        </span>
    )
}

export default DeleteBtn;