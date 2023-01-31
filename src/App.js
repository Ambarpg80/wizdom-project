import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
// import Homepage from "./components/Homepage.js";
import TriviaForm from "./components/TriviaForm"
import TriviaList from "./components/TriviaList"
import { Switch, Route} from "react-router-dom";


function App() {
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
        fetch('http://localhost:3000/trivia')
        .then(res => res.json())
        .then(trivia => setQuestions(trivia))
    },[])

  return (
    <div className="App">
      <header  className="App-header">
        <NavBar />
      </header>
      <Switch>
        {/* <Route exact path="/">
          <Homepage questions={questions} setQuestions={setQuestions}/>
        </Route> */}
        <Route path="/quiz">
          <TriviaList questions={questions}  />
        </Route>
        <Route path="/form">
          <TriviaForm questions={questions} setQuestions={setQuestions} />
        </Route>
      </Switch>
      <div className="container">
            Welcome <br/>
            Would you like to play some trivia? 
      </div>
            
    </div>
  );
}

export default App;
