import React   from "react";
import TriviaQuestion from "./TriviaQuestion"

function TriviaList({triviaData, setTriviaData}) {
    
    // const [triviaData, setTriviaData] = useState([])  , {useEffect, useState}
  
    // useEffect(()=>{
    //     fetch('http://localhost:3000/trivia')
    //     .then(res => res.json())
    //     .then(data => setTriviaData(data))
    // },[])

    function deleteQuestion(id){
     const filteredQuestionList = triviaData.filter(trivia => trivia.id !== id)
     fetch(`http://localhost:3000/trivia/${id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(()=>setTriviaData(filteredQuestionList))
     
    }

  console.log(triviaData)
    return (
        <div className="container">
          {triviaData.map(trivia => <TriviaQuestion key={trivia.id} trivia={trivia} onDelete={deleteQuestion} />  )}
         </div>
    )
}
export default TriviaList