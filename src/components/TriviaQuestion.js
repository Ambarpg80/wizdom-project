import React from "react";

function TriviaQuestion({trivia, onDelete}) {
    console.log(trivia)
    // style={{listStyleType: "none" , margin: "3px"}}
    const {id, question, hint, answers} = trivia
    // const triviaAnswers = answers.map((answer, index) => {
    //   return (<li key={answer[index]} value={answer}>
    //             {answer} 
    //           </li> )
      //   }
      // )

    function handleDelete(e){
      fetch(`http://localhost:3000/trivia/${id}`,{
        method: "DELETE"
      })
      onDelete(e.target.value)
    }

  
    return (
        <div className="App">
           <ul>{id}. {question}
            {/* {triviaAnswers} */}
           </ul> 
           <button value={id} onClick={handleDelete}>Delete</button>
           <button value={hint}> ✨ Hint 📚 ✨ </button>
        </div>
    )
}
export default TriviaQuestion