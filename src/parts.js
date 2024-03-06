import React from 'react';
import '../src/Left-section.css' ;

export default function Parts(props) {
    return (
        <>
        <div style={{display:"flex",flexDirection:"row",height:"40px", alignItems:"center"}} className="labels">
            <h4 style={{marginLeft:"20px",color:"whitesmoke"}}>{props.icon}</h4>
            <h4 style={{marginLeft:"20px",color:"whitesmoke"}}>{props.name}</h4>
        </div>
        
        
        </>
    )
};