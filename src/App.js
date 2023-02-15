import React, { useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage.js";
import TriviaForm from "./components/TriviaForm"
import TriviaCatalog from "./components/TriviaCatalog"
import { Switch, Route} from "react-router-dom";


function App() {
  const [triviaQuestions, setTriviaQuestions] = useState([])
  
  useEffect(()=>{
        fetch('http://localhost:3001/trivia')
        .then(res => res.json())
        .then(data => setTriviaQuestions(data))
    },[])
    
  function handleNewEntry(newQuestion){
      setTriviaQuestions([...triviaQuestions, newQuestion])
  }

  function deleteQuestion(deletedQuestion){
    const filteredQuestionList = triviaQuestions.filter(trivia => trivia.id !== deletedQuestion.id)
      return setTriviaQuestions(filteredQuestionList) 
   }


  return (
    <div className="App">
      <header  className="App-header">
        <NavBar />
      </header>
      <Switch> 
          
        <Route path="/quiz"> 
          <TriviaCatalog triviaQuestions={triviaQuestions} 
                      onDelete={deleteQuestion} />
        </Route>
        <Route path="/form"> 
          <TriviaForm  onAddEntry={handleNewEntry}/>
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>             
    </div>
  );
}

export default App;
