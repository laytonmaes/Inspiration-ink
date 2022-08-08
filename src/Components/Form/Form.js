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
                setErr("Success!")
                setUserPrompt("")
            })
            .catch((err) => {
                setErr("I'm sorry, that didn't work. Please try again.")
            })
        } else {
            setErr("Please write a prompt before submitting.")
        }
    }

    return (
        <form>
            <h1>Submit a Prompt!</h1>
            <input
            type="text"
            placeholder="userPrompt"
            name="userPrompt"
            value={userPrompt}
            onChange={event => updatePrompt(event)}
            />
            <p>{errorMessage}</p>
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