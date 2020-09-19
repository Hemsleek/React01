import React from 'react'

import {Link} from 'react-router-dom'


export default() => {
    const routes = [
        {
        route:'/home',
        text:'Home'
        },
        {
            route:'/about',
            text:'About'
        },
        {
            route:'/contact',
            text:'Contact'
        },
        {
            route:'/login',
            text:'Login'
        }
    ]
    return(
    <nav>
        {
            routes.map(({route , text},routeIndex) =>(
            <Link key={`nav-route-${routeIndex}`} to={route}>{text}</Link>  
            ))
        }
    </nav>
)
    }