import React , {useState} from "react";

function TriviaQuestion({trivia, onDelete}) {
    const  [showHint, setShowHint] = useState(false)
    const {id, question, hint, answers} = trivia
    const triviaAnswers = answers.map((answer) => {
      return (<div key={answer} >
                <li   value={answer}   style={{listStyleType: "none" }} >
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
      // return (<div>{showHint ? {hint} : null}</div>)
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
            <div>{showHint ? 
                <div style={{padding: "15px"}}> {hint} </div> 
                : null}</div>
        </div>
      </div>
    )
}
export default TriviaQuestion