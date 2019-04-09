import React from 'react';
import ReactDOM from 'react-dom';

function MyList() {
    return (
    <ul>
        <li>Vivian</li>
        <li>Awino</li>
        <li>Opondoh</li>
    </ul>
)
}

ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById('root'));
ReactDOM.render(<MyList />, document.getElementById('body'));

