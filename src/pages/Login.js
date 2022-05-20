import React from "react";

import {useNavigate} from "react-router-dom";
import {useState} from 'react';

function About() {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const userHandle = event => {
        setUsername(event.target.value)
    }
    const passHandle = event => {
        setPassword(event.target.value)
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        navigate('/startup-app/mainpage')
    }
    const logValue = () => {
        if(username=="username" && password == "password"){
            routeChange()
            console.log("In the if statement")
        }
        console.log(username, password)
    }

    return (
        <div>
            <input onChange={userHandle} type="text" name="Username" id = "Username" placeholder="username"></input>
            <input onChange={passHandle} type="password" name="Password" id = "Password" placeholder="password"></input>
            <button onClick={logValue}>Sign in</button>
        </div>
    );
}

export default About