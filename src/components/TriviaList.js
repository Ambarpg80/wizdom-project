import React  from "react";
import TriviaQuestion from "./TriviaQuestion"

function TriviaList({questions}) {
    // const [questions, SetQuestions] = useState([])
  
    // useEffect(()=>{
    //     fetch('http://localhost:3000/trivia')
    //     .then(res => res.json())
    //     .then(trivia => SetQuestions(trivia))
    // },[])
  
    return (
        <div >
          {questions.map(prompt => <div key={prompt.id} ><TriviaQuestion prompt={prompt} /> </div> )}
         </div>
    )
}
export default TriviaList