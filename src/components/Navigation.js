import React from 'react';
import {NavLink} from "react-router-dom";
import HistoryStyle from "./HistoryStyle.css";

const Navigation = () =>{
    return(
        <div className="header">
            <NavLink to="/" className="home-boutton">HOME</NavLink>
            <NavLink to="/notre-histoire" activeClassName="history" className="history-boutton">HISTORY</NavLink>
        </div>
    )

}

export default Navigation