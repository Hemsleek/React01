import React from 'react'

import NavBar from '../Components/NavBar'


export default(props) => (
    <>
    <NavBar />
    {props.children}
    </>
)