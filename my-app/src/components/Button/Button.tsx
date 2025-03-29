import { on } from "events";
import React from "react"

interface IButtonprops{
    buttonText: string;
    onClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button (props:IButtonprops){

    const {buttonText, onClick} = props; 
    
    return (
        <button onClick={onClick}> {buttonText} </button>
    )
}