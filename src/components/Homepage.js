import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import TriviaForm from "./TriviaForm"
import TriviaQuestions from "./TriviaQuestions"
function Homepage() {
   console.log('Something Goes Here')
  
    return (
        <div>
            <TriviaQuestions />
            <TriviaForm />
            <AdditionalInfo />
        </div>
    )
}
export default Homepage
