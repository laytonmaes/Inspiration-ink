import React, { useState } from 'react';
import "./Form.css"
import { postInspInkPrompts } from '../../apiCalls';
import { NavLink } from 'react-router-dom';

const Form = () => {
    const [userPrompt, setUserPrompt] = useState("")
    const [errorMessage, setErr] = useState(null)


    const updatePrompt = (event) => {
        setUserPrompt(event.target.value)
    }

    const submitPrompt = (event) => {
        event.preventDefault()
        if(userPrompt !== ""){
            const newPrompt = {"prompt":userPrompt}
            postInspInkPrompts(newPrompt)
            .then(data => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <form>
            <input
            type="text"
            placeholder="userPrompt"
            name="userPrompt"
            value={userPrompt}
            onChange={event => updatePrompt(event)}
            />
            <h3>{errorMessage}</h3>
            <div className='button-wrapper'>
            <NavLink to={"/"} className="Nav">
                <button> Back to Home </button>
            </NavLink>
            <button onClick={(event) => {submitPrompt(event)}}> Submit New Prompt </button>
            </div>
        </form>
    )
}

export default Form