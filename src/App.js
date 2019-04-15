import React from 'react'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
import Joke from './Components/Joke'
import './App.css'

function App() {
  return (
  <div  className="contactList">
  {/* <Header /> */}
  <MainContent />
  <Joke text = {{
         question: "What did Jay-Z call his girlfriend before they got married?",
         punchline: "Feyoncé"
     }}
  />
  <Joke text = {{
        question: "Why can’t a bike stand on its own?",
        punchline: "It’s two tired"     
    }} />
  {/* <Footer /> */}
  </div>
)
}

export default App;
