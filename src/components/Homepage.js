import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import TriviaForm from "./TriviaForm"
import TriviaList from "./TriviaList"




function Homepage({questions, setQuestions}) {
//    const [questions, SetQuestions] = useState([])
  
    // useEffect(()=>{
    //     fetch('http://localhost:3000/trivia')
    //     .then(res => res.json())
    //     .then(trivia => setQuestions(trivia))
    // },[])

    return (
        <div >
            <div className="container">
            Welcome <br/>
            Would you like to play some trivia? 
            </div>
            
        </div>
    )
}
export default Homepage
