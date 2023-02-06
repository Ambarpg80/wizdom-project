import React , {useState} from "react";


function TriviaQuestion({trivia, onDelete, onhandleAnswers, setPoints}) {
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

    function handleDelete(){
      fetch(`http://localhost:3000/trivia/${trivia.id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(()=> onDelete(trivia))
    }

    function seeHint(){
      setShowHint(!showHint)
      setPoints(points => points-3)
    } 
    
    function handleAnswers(e){
      onhandleAnswers( correctIndex, e)
    }
    
  
    return (
      
        <div className="container"   >
          
            <ul>
             <b> {id}. {question} </b> 
            </ul>  
              {triviaAnswers}
          <div > 
            <button style={{float: "left" }} value={id} onClick={handleDelete}>Delete</button>
            <button style={{float: "right" }} value={hint} onClick={seeHint}> ✨ Hint 📚 ✨ </button>
            
            <div style={{padding: "15px"}}>{showHint ? 
                <div style={{padding: "15px"}}> {hint} </div> 
                : null}</div>
          </div>  
            
      </div>
    )
}
export default TriviaQuestion