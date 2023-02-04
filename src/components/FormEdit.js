import React, {useState} from "react";

function FormEdit({triviaData, formData, setFormData, onUpdateQuestion}) {
    const [editForm , setEditForm] = useState("")  

    function handleEditChange(e){
        setEditForm(e.target.value)
        console.log(e.target.id) 

    }
   
    function handleUpdate(e){
        fetch(`"http://localhost:3000/trivia/${e.target.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify (formData.question,
                                 formData.hint ,
                                 formData.answers,
                                 formData.correctIndex ,
                                 )
        }) 
        console.log(e.target.id );
            
      }
    return (
        <div className="edit">
            Edit Your Question Below
            <form onSubmit={handleUpdate}> 
              <select  onChange={handleEditChange}>
                {triviaData.map(trivia => <option style={{margin: "15px"}} key={trivia.id} id={trivia.id} value={trivia.question}>{trivia.question} </option> )}
              </select>

                <div key={formData.id}>
                   <label> Answer 1 :     
                      <input id={formData.answer[0]} value={formData.answer1} onChange={handleEditChange}></input>
                    </label><br/>
                    
                    <label> Answer 2 :     
                      <input id={formData.answer[1]} value={formData.answer2} onChange={handleEditChange}></input>
                    </label><br/>
                    
                    <label> Answer 3 :     
                      <input id={formData.answer[2]} value={formData.answer3} onChange={handleEditChange}></input>
                    </label><br/>

                    
                    <label> Answer 4:     
                      <input  id={formData.answer[3]} value={formData.answer4} onChange={handleEditChange}></input>
                    </label><br/>
                    
                    <label> Correct Answer :     
                      <select id={formData.correctIndex} value={formData.correctIndex} onChange={handleEditChange}>
                        <option id={formData.answer[0]} value="0"> {formData.answer1} </option>
                        <option id={formData.answer[1]} value="1"> {formData.answer2} </option>
                        <option id={formData.answer[2]} value="2"> {formData.answer3} </option>
                        <option id={formData.answer[3]} value="3"> {formData.answer4} </option>
                      </select>
                    </label><br/>
                </div> 
               
            <button type="submit">Submit</button> 
            </form>
        </div>
    )
}
export default FormEdit
