import React from "react";

function TriviaQuestion({prompt}) {
    console.log(prompt)
    const {id, question, hint, answers} = prompt
  
    return (
        <div className="App">
           <ul>{id}. {question}
            {answers.map(answer => 
              <li key={answer} style={{listStyleType: "none" , margin: "3px"}}>
                <button > {answer} </button>
              </li>
            )}
           </ul> 
           <button value={hint}> ✨ Hint 📚 ✨ </button>
        </div>
    )
}
export default TriviaQuestion