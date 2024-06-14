import React from "react";


function InfoItem( {icon, value }) {
    return (
        <p style={{
            display:'flex',
            margin: '5px 0px' 
        }}>{icon}{     value}</p>
    )
}

export default InfoItem
