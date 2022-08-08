import React, { useEffect, useState } from "react";
import "./RandomChoice.css"
import { NavLink } from "react-router-dom";
import {getRandomWord, getWordDefinition, getInspInkPrompts} from "../../apiCalls";

const RandomChoice = ({userChoice}) => {
const [randomMessageOne, setrandomMessageOne] = useState("")
const [randomMessageTwo, setrandomMessageTwo] = useState("")
const [randomPhrase, setRandomPhrase] = useState(null)
let mainCall = null
let secondaryCall = null
// -------------------- apiCalls -------------------- //
const callMainPost = () => {
    if(userChoice === "inspiration") {
        mainCall = getRandomWord()
        secondaryCall = "wordDefinition"
    } else if (userChoice === "mashup" ||userChoice === "user" ||userChoice === "inktober"){
        mainCall = getInspInkPrompts(userChoice)
        if(userChoice === "mashup"){
            secondaryCall = "mashup"
        }
    }else {
        mainCall = null
    }
}
// -------------------- first call -------------------- //
callMainPost()

useEffect(() => {
    if(!mainCall){
        return
    }else {
        mainCall
           .then(data => {
               setrandomMessageOne(data[0])
           })
           .catch(err => {
               return err
           })
    }
}, [])
// -------------------- second call -------------------- //
useEffect(() => {
    if(secondaryCall === "wordDefinition") {        
        getWordDefinition(randomMessageOne)
            .then(data => {
                setrandomMessageTwo(data[0].meanings[0].definitions[0].definition)
            })
            .catch(err => {
                setrandomMessageTwo("")
            })
    }else if(secondaryCall === "mashup"){

        getInspInkPrompts("mashup")
            .then(data => {
                console.log(data)
                setrandomMessageTwo(data[0])
            })
            .catch(err => {
                setrandomMessageTwo("")
            })
    }
}, [randomMessageOne])
// -------------------- set phrase if needed -------------------- //
useEffect(() => {
    if(userChoice === "mashup") {
        setRandomPhrase(`Draw ${randomMessageOne} as ${randomMessageTwo}`)
    }
},[randomMessageTwo])

const rerollFetch = () => {
    callMainPost()

    mainCall
    .then(data => {
        setrandomMessageOne(data[0])
    })
    .catch(err => {
        return err
    })
}

    return (
        <section>
            {!mainCall && 
            <>
            <h2>We are sorry but this page does not exist </h2>
            <h3> Please Return to Home and Try Again</h3>
            </>
            }
            {!randomPhrase &&
                <div className="phrase">
                    <h2>{randomMessageOne}</h2>
                    <h3>{randomMessageTwo}</h3>
                </div>
            } 
            {randomPhrase &&
                <h2>{randomPhrase}</h2>
            }     
                <NavLink to={"/"} className="Nav" >
                    <button> Back to Home </button>
                </NavLink>
            {mainCall && 
                <button onClick={() => rerollFetch()}>Roll Again?</button>
            }
            
        </section>
    )
}

export default RandomChoice