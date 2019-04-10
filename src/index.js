import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyInfo from './Components/MyInfo'
import MyList from './Components/MyList'

ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById('root'));
ReactDOM.render(<MyList />, document.getElementById('body'));
ReactDOM.render(<MyInfo />, document.getElementById('body1'));

