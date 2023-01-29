import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import TriviaForm from "./TriviaForm"
import TriviaQuestions from "./TriviaQuestions"
function Homepage() {
   
  
    return (
        <div>
            <header className="App-header">
            Hello from the NavBar
            </header>
            <TriviaQuestions />
            <TriviaForm />
            <AdditionalInfo />
        </div>
    )
}
export default Homepage
