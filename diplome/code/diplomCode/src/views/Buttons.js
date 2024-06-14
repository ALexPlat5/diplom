import React from "react";
import style from './css/buttons.module.css'
import { name } from "react-lorem-ipsum";

function Button({className, value, icon=null, selfStyle=null}) {
    className = className.map((element)=>{
        return style[element];
    })

    if (selfStyle===null) {
        selfStyle = {}
    }

    if (icon===null) {
        icon = ''
    } else {
        value = 
        <div style={{pointerEvents:'none',padding:'0',display:"flex", alignItems:'center', width:'100%', height:'100%'}}>
            {icon}
            <p style={{margin: '0'}}>{value}</p>
        </div>
    }

    return (
        <button style={selfStyle} className={className.join(' ')}>{value}</button>
    )
}

export default Button
