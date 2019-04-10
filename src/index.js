import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function MyList() {
    return (
    <ul>
        <li>Vivian</li>
        <li>Awino</li>
        <li>Opondoh</li>
    </ul>
)
}

function MyInfo() {
    return (
        <div>
        <h1>Vivian Opondoh</h1>
        <p>I am an entrepreneur, I love love cooking, This is my year with my solid team</p>
        <ol>
            <li>Bali</li>
            <li>Maldives</li>
            <li>Dar es Salaam</li>
        </ol>
        </div>
    )
}

ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById('root'));
ReactDOM.render(<MyList />, document.getElementById('body'));
ReactDOM.render(<MyInfo />, document.getElementById('body1'));

