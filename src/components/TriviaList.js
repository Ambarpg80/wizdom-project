import React , {useState}  from "react";
import TriviaQuestion from "./TriviaQuestion"

function TriviaList({triviaData, setTriviaData}) {
  const [points , setPoints] = useState(0)
    function deleteQuestion(id){
     const filteredQuestionList = triviaData.filter(trivia => trivia.id !== id)
     fetch(`http://localhost:3000/trivia/${id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(()=>setTriviaData(filteredQuestionList)) 
    }
    
    function pointAnswers(id, e){
     if (id === parseInt(e.target.id))
      setPoints(points => points + 10) 
    }

    return (
        <div className="container">
          {triviaData.map(trivia => <TriviaQuestion key={trivia.id} 
          trivia={trivia} 
          onDelete={deleteQuestion} 
          onhandleAnswers={pointAnswers}
          points={points}/>
          )}
          <h1>Well Done! {points } points have been awarded to you for your astonishing knowledge of Hogwarts History!</h1>
         </div>
    )
}
export default TriviaList