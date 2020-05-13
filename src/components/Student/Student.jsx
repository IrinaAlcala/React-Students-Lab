import React from "react";
import Score from "../Score/Score";

const Student = (props) => (
    <div>
        <h2>{props.student.name}</h2>
        <p>{props.student.bio}</p>
        <Score scores={props.student.scores} />

        
    </div>
);

export default Student;