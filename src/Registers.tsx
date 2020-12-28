import React from "react"
import "./Registers.css"

interface IProps{
    registers: Array<number>
}

export const Registers : React.FC<IProps> = ({registers}) => {

    
    return(
        <div id="Registers">
            R0: {registers[0]}
        </div>
    )
}
