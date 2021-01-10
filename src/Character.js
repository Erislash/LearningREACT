import React from 'react'

function FormatName(name, surname){
    if(!name || !surname) return "???"
    return `${name} ${surname}`
}

export default function Character({name, surname, job, age, avatar, handle}){
    return(
    <div className="character">
            <h2 className="name">{FormatName(name, surname)}</h2>
            <div className="imgContainer">
                <img src={avatar} alt={`${name} avatar`}/>
            </div>
            <hr />
            <div className="stats">
                <h4><b>Class</b>: {job}</h4>
                <h4><b>Age</b>: {age}</h4>
            </div>
            <hr />
            <div className="btnContainer">
                <button
                onClick={handle(name)}
                className="selectBtn">
                    Select
                </button>
            </div>
    </div>
    )
}