import React from "react";

const Box = (props) =>{
    console.log("box children component")
    return(
    <div>{props.name}</div>
    )
}

export default Box;