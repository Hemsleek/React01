import React, { useState } from 'react'
import {Switch ,Route} from 'react-router-dom'

//routes
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ContactPage from './Pages/Contact'
import LoginPage from './Pages/Login'
import NavBar from './Components/NavBar'

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

            <Switch>
            <Route path='/debug' render={(props) => (<pre>{JSON.stringify(props,null,3)}</pre>)} />
                <Route path='/' component={NavBar} exact />
                <Route path='/home' component={HomePage}  />
                <Route path='/login' component={LoginPage} />
                <Route path='/contact' component={ContactPage}  />
                <Route path='/about' component={AboutPage} />
                <Route render={()=> <h2>path does no exist</h2>} />
            </Switch>

        </center>
    )
}


