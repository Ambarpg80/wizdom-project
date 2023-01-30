import React from "react";
import trivia from "../db.json";
import TriviaList from "./TriviaList"


function Homepage() {
   
  
    return (
        <div>
            <header className="App-header">
            Hello from the NavBar
            </header>
            <TriviaList />
        </div>
    )
}
export default Homepage
