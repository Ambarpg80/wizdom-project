import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage.js";
import TriviaForm from "./components/TriviaForm"
import TriviaList from "./components/TriviaList"
import TriviaQuestion from "./components/TriviaQuestion"
import { Switch, Route} from "react-router-dom";


function App() {
  const [triviaData, setTriviaData] = useState([])

  useEffect(()=>{
        fetch('http://localhost:3000/trivia')
        .then(res => res.json())
        .then(data => setTriviaData(data))
    },[])
//  console.log(triviaData)

  return (
    <div className="App">
      <nav  className="App-header">
        <NavBar />
      </nav>
      <Switch> 
         <Route exact path="/">
          <Homepage triviaData={triviaData} setTriviaData={setTriviaData}/>
        </Route> 
        <Route path="/quiz"> 
          <TriviaList triviaData={triviaData}  />
        </Route>
        <Route path="/quiz/:id"> 
          <TriviaQuestion  />
        </Route>
         <Route path="/form"> 
          <TriviaForm  />
        </Route>
      </Switch>             
    </div>
  );
}

export default App;
