import React, { useState } from 'react'

import './App.scss'


const App = () => {
    // useState
    const array=['Benue','Markurdi','Abuja']
    let rand =Math.floor(Math.random()*array.length)

    const [state, setState] = useState("Kwara");

    const submit = () => setState(array[rand])

    // random-bg
    const [color, setColor] = useState("rgb(0,0,0)")

    const RandColor = () => Math.floor(Math.random()*255);

    const colors=() => {
        setColor(`rgb(${RandColor()},${RandColor()},${RandColor()})`);

        
    }

    return (
        <center>
            <h1>{state}</h1> 
            <input type="text" value={state} />
            <button onClick={submit}>Change</button>
            <div className="box" onMouseEnter={colors} style={          {backgroundColor:color}} />
        </center>
    )
}

export default App

