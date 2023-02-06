import React, { useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage.js";
import TriviaForm from "./components/TriviaForm"
import TriviaList from "./components/TriviaList"
import { Switch, Route} from "react-router-dom";


function App() {
  const [triviaData, setTriviaData] = useState([])
  
  useEffect(()=>{
        fetch('http://localhost:3000/trivia')
        .then(res => res.json())
        .then(data => setTriviaData(data))
    },[])
    
  function handlenewEntry(newQuestion){
      setTriviaData([...triviaData, newQuestion])
  }

  return (
    <div className="App">
      <header  className="App-header">
        <NavBar />
      </header>
      <Switch> 
         <Route exact path="/">
          <Homepage />
        </Route> 
        <Route path="/quiz"> 
          <TriviaList triviaData={triviaData} setTriviaData={setTriviaData} />
        </Route>
        <Route path="/form"> 
          <TriviaForm  onAddEntry={handlenewEntry}/>
        </Route>
      </Switch>             
    </div>
  );
}

export default App;
