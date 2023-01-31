import React  , {useEffect, useState} from "react";
import TriviaQuestion from "./TriviaQuestion"

function TriviaList() {
    
    const [triviaData, setTriviaData] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost:3000/trivia')
        .then(res => res.json())
        .then(data => setTriviaData(data))
    },[])

    function deleteQuestion(id){
     const filteredQuestionList = triviaData.filter(trivia => trivia.id !== id)
     setTriviaData(filteredQuestionList)
    }

  console.log(triviaData)
    return (
        <div >
          {triviaData.map(trivia => <TriviaQuestion key={trivia.id} trivia={trivia} onDelete={deleteQuestion} />  )}
         </div>
    )
}
export default TriviaList