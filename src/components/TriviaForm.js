import React, {useState} from "react";

function TriviaForm({questions, onAddQuestion}) {
   const [formData, setFormData] = useState({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0
   })
  const [categoryAnswer, setCategoryAnswer] =useState(formData.answer1)

   function handleCategoryChange(e){
    setCategoryAnswer(e.target.value)
   }
 
   function handleInputChange(e){
    setFormData(e.target.value)
   }

   function handleSubmit(e){
    e.preventDefault();
    //setFormData(e.target.value)
    fetch("http://localhost:3000/trivia",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            question: formData.question,
            answers:[
                     formData.answer1,
                     formData.answer2,
                     formData.answer3,
                     formData.answer4,
            ],
            correctIndex: formData.correctIndex
        }) 
    })
    .then(res => res.json())
    .then(()=>onAddQuestion(questions.formData))
   
   }

  
    return (
      <div >
        <div className="container"> Help us add to the Fun! </div>
        <div className="container">
        <form onClick={handleSubmit}>
            <input placeholder="New Question" value={formData.question} onChange={handleInputChange}></input>
                <label>Question</label>

            <input placeholder="Answer" value={formData.answer1} onChange={handleInputChange}></input>
                <label>Answer 1</label>

            <input placeholder="Answer" value={formData.answer2} onChange={handleInputChange}></input>
                <label>Answer 2</label>

            <input placeholder="Answer" value={formData.answer3} onChange={handleInputChange}></input>
                <label>Answer 3</label>

            <input placeholder="Answer" value={formData.answer4} onChange={handleInputChange}></input>
                <label>Answer 4</label>

            <select value={formData.correctIndex} onChange={handleCategoryChange} > 
                <option value={categoryAnswer}>{formData.answer1}</option>
                <option value={categoryAnswer}>{formData.answer2}</option>
                <option value={categoryAnswer}>{formData.answer3}</option>
                <option value={categoryAnswer}>{formData.answer4}</option>
            </select>
            <button type="submit" value="Submit">Submit</button>
        </form>
        </div>
      </div>
    )
}
export default TriviaForm