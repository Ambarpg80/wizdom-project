import React , {useState}  from "react";
import TriviaQuestion from "./TriviaQuestion";


function TriviaList({triviaData, onDelete}) {
  const [points , setPoints] = useState(0);
  const [currentQ, setCurrentQ] = useState(1);

    
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
     <div key={trivia.id} > 
      <TriviaQuestion 
          trivia={trivia} 
          onDelete={onDelete} 
          onhandleAnswers={pointAnswers}
          points={points}
          setPoints={setPoints}
      />
     </div> 
     :  null
     })

    return (
      <div className="quiz-page">
        <div className="container">
        { perQuestion }  
          <h1> {points } points have been awarded to your House for your knowledge of Hogwarts History!</h1>
        </div>
      </div>   
    )
}
export default TriviaList