import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Course = ({title ,duration}) =>(      
    <div className="course">
    <h2>{title}</h2>  
    <p>{duration}</p>
    </div>
)


const App = () => {
    const curricculum = [
        {
            title:"HTML/CSS",
            duration:"1 month"
        },
        {
            title:"HTML/CSS",
            duration:"1 month"
        },
        {
            title:"HTML/CSS",
            duration:"1 month"
        },
        {
            title:"HTML/CSS",       
            duration:"1 month"
        },
        {
            title:"HTML/CSS",
            duration:"1 month"
        },
        {
            title:"HTML/CSS",
            duration:"1 month"
        } 
    ]
    return (
        <div className="App">
            {
                curricculum.map(({title, duration}) => (
                    <Course title={title} duration={duration} />
                ))
            }
        </div>
    )
}

ReactDOM.render( < App /> , document.getElementById("root"))