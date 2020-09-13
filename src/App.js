import React, { useState } from 'react'

import './App.scss'


export default() => {
    // useState
    const array=['Benue','Markurdi','Abuja','end']
    let rand = Math.floor(Math.random()*array.length)
    const reRand = () =>  Math.floor(Math.random()*array.length);
    const [state, setStates] = useState("Kwara");

    const submit = () => {
        if(state !== array[rand]) setStates(array[rand])
        else {
            rand=reRand()
            return submit();
        }
    }

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
            <button onClick={() => submit()}>Change</button>
            <div className="box" onMouseEnter={colors} style={          {backgroundColor:color}} />
        </center>
    )
}


