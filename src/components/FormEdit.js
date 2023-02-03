import React, {useState} from "react";

function FormEdit({triviaData, formData, setFormData, onUpdateQuestion}) {
    const [editForm , setEditForm] = useState("")  

    function handleChange(e){
        setEditForm(e.target.value)
    }
   
    function handleUpdate(e){
        e.preventDefault();
        fetch("http://localhost:3000/trivia/id",{
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({[e.target.id] : e.target.value})
        }) 
        console.log(e.target.value );
            
      }
    return (
        <div className="edit">
            Edit Your Question Below
            <form onSubmit={handleUpdate}> 
            <select  onChange={handleChange}>
                {triviaData.map(trivia => <option style={{margin: "15px"}} key={trivia.id} id={trivia.id} value={trivia.question}>{trivia.question} </option> )}
            </select>

            {triviaData.map(trivia => { 
              return  (trivia.id === editForm) ?
               
                <div key={trivia.id}>
                  <label>  Question :     
                  <input id={trivia.id} value={trivia.question} onChange={handleChange}>
                    </input>
                    </label><br/>
                
                
                    <label> Answer 1 :     
                    <input id={trivia.answers[0]} value={trivia.answer1} onChange={handleChange}>
                    </input>
                    </label><br/>
                    
                    <label> Answer 2 :     
                        <input id={trivia.answers[1]} value={trivia.answer2} onChange={handleChange}></input>
                    </label><br/>
                    
                    <label> Answer 3 :     
                    <input id={trivia.answers[2]} value={trivia.answer3} onChange={handleChange}></input>
                    </label><br/>

                    
                    <label> Answer 4:     
                    <input  id={trivia.answers[3]} value={trivia.answer4} onChange={handleChange}></input>
                    </label><br/>
                    
                    <label> Correct Answer :     
                    <select id="correctIndex" value={formData.correctIndex} onChange={handleChange}>
                        <option id="answer1" value="0"> {formData.answer1} </option>
                        <option id="answer2" value="1"> {formData.answer2} </option>
                        <option id="answer3" value="2"> {formData.answer3} </option>
                        <option id="answer4" value="3"> {formData.answer4} </option>
                    </select>
                    </label><br/>
                </div> : null
                })
                
            } 
            <button type="submit">Submit</button> 
            </form>
        </div>
    )
}
export default FormEdit
