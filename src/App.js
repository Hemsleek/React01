import React, { useState } from 'react'

import './App.scss'


const App = () => {

    const [state, setState] = useState("Kwara");
    const array=['Benue','Markurdi','Abuja']
    let rand =Math.floor(Math.random()*array.length)
    const submit = () => setState(array[rand])

    return (
        <center>
            <h1>{state}</h1> 
            <input type="text" value={state} />
            <button onClick={submit}>Change</button>
        </center>
    )
}

export default App

