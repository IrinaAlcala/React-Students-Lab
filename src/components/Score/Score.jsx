import React from "react";
const Score = (props) => (
    <div>
        {props.scores.map((score, idx) => (
         <p key={idx}>
             {score.date} --- {score.score}

         </p>   
        ))}
    </div>
);

export default Score;