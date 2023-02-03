import React , {useState} from "react";


function TriviaQuestion({trivia, onDelete, onhandleAnswers, points}) {
    const  [showHint, setShowHint] = useState(false)

    const {id, question, hint, answers ,correctIndex} = trivia
    

    const triviaAnswers = answers.map((answer, index) => {
      return (<div key={answer} >
                <li   onClick={handleAnswers} value={answer}  id={index} style={{listStyleType: "none" }} >
                  {answer} 
                </li> 
                <hr/>
              </div>)
        }
      )

    function handleDelete(e){
      onDelete(e.target.value)
    }

    function seeHint(){
      setShowHint(!showHint)
    } 
    
    function handleAnswers(e){
      onhandleAnswers( correctIndex, e)
    }
    
  
    return (
      
        <div className="container"   >
          
            <ul>
              {id}. {question}
            </ul>  
              {triviaAnswers}
          <div > 
            <button style={{float: "left" }} value={id} onClick={handleDelete}>Delete</button>
            <button style={{float: "right" }} value={hint} onClick={seeHint}> ✨ Hint 📚 ✨ </button>
            
            <div style={{padding: "15px"}}>{showHint ? 
                <div style={{padding: "15px"}}> {hint} </div> 
                : null}</div>
          </div>  
             Total Points: {points}
      </div>
    )
}
export default TriviaQuestion