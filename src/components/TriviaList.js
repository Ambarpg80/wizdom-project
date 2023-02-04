import React , {useState}  from "react";
import TriviaQuestion from "./TriviaQuestion"


function TriviaList({triviaData, setTriviaData}) {
  const [points , setPoints] = useState(0);
   const [currentQ, setCurrentQ] = useState(1);

  
  
  function deleteQuestion(id){
     const filteredQuestionList = triviaData.filter(trivia => trivia.id !== id)
     fetch(`http://localhost:3000/trivia/${id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(()=>setTriviaData(filteredQuestionList)) 
    }
    
    function pointAnswers(correctIndex, e){
      if (correctIndex === parseInt(e.target.id)){
      setPoints(points => points + 10)
      setCurrentQ(currentQ +1) 
     }else{
        setCurrentQ(currentQ +1)
       }
    }

    const perQuestion = triviaData.map((trivia) => {
      return  (currentQ === trivia.id) ? 
     <div key={trivia.id} ><TriviaQuestion 
          trivia={trivia} 
          onDelete={deleteQuestion} 
          onhandleAnswers={pointAnswers}
          points={points}
          setPoints={setPoints}/>
     </div> 
     :  null
     })

    return (
      <div className="quiz-page">
        <div className="container">
        { perQuestion }  
          <h1> {points } points have been awarded to you for your  knowledge of Hogwarts History!</h1>
          
          {/* <p onClick={()=> setPoints(0) && trivia.id === setCurrentQ(1) } ><u>Try Again?</u></p> */}
         </div>
      </div>   
    )
}
export default TriviaList