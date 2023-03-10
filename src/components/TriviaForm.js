import React, {useState} from "react";


function TriviaForm({onAddEntry}) {
  const [formData, setFormData] = useState({
    question: "",
    hint: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0
  });

  function handleChange(e){
   setFormData({...formData,
           [e.target.id]: e.target.value,
        }); 
  }

  function handleSubmit(e){
    e.preventDefault();
    const newFormItem= {  question: formData.question,
                          hint: formData.hint,
                          answers: [formData.answer1,
                                    formData.answer2,
                                    formData.answer3,
                                    formData.answer4,],
                          correctIndex: parseInt(formData.correctIndex),
                        };
    fetch("http://localhost:3001/trivia",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newFormItem)
    }) 
    .then(res => res.json())
    .then((newFormItem)=>{
      onAddEntry(newFormItem)
      setFormData({ question: "",
                    hint: "",
                    answer1: "",
                    answer2: "",
                    answer3: "",
                    answer4: "",})
    })
  }
   

  return (
      <div className=" formPage-text " >
        
        <div className="container" >
          <div style={{fontSize: "25px" , margin: "15px"}}> <b> Help us add to the Fun! </b> </div>
          <form onSubmit={handleSubmit}>
              <label>  
                Question :  <input placeholder="New Question" 
                                  type="text" 
                                  id="question" 
                                  value={formData.question} 
                                  onChange={handleChange}
                                  >

                          </input>
              </label><br/>

              <label> 
                Hint :  <input placeholder="Hint" 
                                  type="text" 
                                  id="hint" 
                                  value={formData.hint} 
                                  onChange={handleChange}
                                  style={{marginLeft : "40px"}}>
                            </input>
              </label><br/>

              <label> 
                Answer 1 :  <input placeholder="Answer" 
                                  type="text" 
                                  id="answer1" 
                                  value={formData.answer1} 
                                  onChange={handleChange}>
                            </input>
              </label><br/>
              
              <label> 
                Answer 2 :  <input placeholder="Answer" 
                                  type="text" 
                                  id="answer2" 
                                  value={formData.answer2} 
                                  onChange={handleChange}>
                            </input>
              </label><br/>
              
              <label> 
                Answer 3 :  <input placeholder="Answer" 
                                  type="text" 
                                  id="answer3" 
                                  value={formData.answer3} 
                                  onChange={handleChange}>
                            </input>
              </label><br/>
              
              <label> 
                Answer 4 :  <input placeholder="Answer" 
                                  type="text" 
                                  id="answer4" 
                                  value={formData.answer4} 
                                  onChange={handleChange}>
                            </input>
              </label><br/>
              

              <label> Correct Answer :  
                <select id="correctIndex" value={formData.correctIndex} onChange={handleChange}>
                  <option id="answer1" value="0"> {formData.answer1} </option>
                  <option id="answer2" value="1"> {formData.answer2} </option>
                  <option id="answer3" value="2"> {formData.answer3} </option>
                  <option id="answer4" value="3"> {formData.answer4} </option>
                </select>
              </label><br/>
              <button type="submit">Submit</button> 
          </form> 
         
        </div>
      </div>
    )
}
export default TriviaForm
