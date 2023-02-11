import React , {useState}  from "react";
import TriviaQuestion from "./TriviaQuestion";


function TriviaCatalog({triviaQuestions, onDelete}) {
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

    const currentQuestion = triviaQuestions.find((trivia) =>  (currentQ === trivia.id))

    return (
      <div className="quiz-page">
        <div className="container">
        { currentQuestion ? <TriviaQuestion 
            trivia={currentQuestion} 
            onDelete={onDelete} 
            onhandleAnswers={pointAnswers}
            points={points}
            setPoints={setPoints}
        />
        :  null }  
          <h1> {points } points have been awarded to your House for your knowledge of Hogwarts History!</h1>
        </div>
      </div>   
    )
}
export default TriviaCatalog