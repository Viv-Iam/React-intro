import React from 'react';

const Joke = (props) => (
    <div>
    <h2 style = {{display: !props.text.question && "none"}}> Question: {props.text.question} </h2>
    <h3 style = {{color: !props.text.question && "blue"}}> PunchLine: {props.text.punchline} </h3>
    <hr/>
    </div>
) 

export default Joke;