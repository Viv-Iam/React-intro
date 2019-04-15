import React from 'react';

const Joke = (props) => (
    <div>
    <h2> Question: {props.text.question} </h2>
    <h3> PunchLine: {props.text.punchline} </h3>
    <hr/>
    </div>
) 

export default Joke;