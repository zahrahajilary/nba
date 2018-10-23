import React from 'react'

import  FontAwsome from 'react-fontawesome'
import './carInfo.css'

const CardInfo = (props)=>{

    const teamName =(teams,team)=>{
        let data = teams.find((item)=>{
            return item.id === team
        });
        if(data){
            return data.name
        }
    }
    return(
        <div className="cardinfo">
         <span className="teamName">
           {teamName(props.teams,props.team)}
         </span> 
         <span className="date">
         
         <FontAwsome name="clock-o"/>
         {props.date}
         </span>
        </div>
    )
}

export default CardInfo