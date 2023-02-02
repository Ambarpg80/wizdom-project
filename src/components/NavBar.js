import React from "react";
import { NavLink } from "react-router-dom";
function NavBar(){
    
    return(
        <div className="App-header" >
            <NavLink  to="/"> Home  </NavLink>
            <NavLink  to="/quiz">Quiz</NavLink>
            <NavLink  to="/form">Add a Question</NavLink>

        </div>
    )
}

export default NavBar;