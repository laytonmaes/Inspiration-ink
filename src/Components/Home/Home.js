import React, { useEffect } from "react";
import "./Home.css"
import { NavLink } from "react-router-dom";


const Home = () => {

    return (
        <section className="home">
            <div className="random-buttons">
                <NavLink to={"/random-inspiration"} className="Nav" >
                <button> Inspirational Word </button>
                </NavLink>
                <NavLink to={"/random-mashup"} className="Nav" >
                <button> Series Mashups </button>
                </NavLink>
                <NavLink to={"/random-inktober"} className="Nav" >
                <button> Random Inktober Word </button>
                </NavLink>
                <NavLink to={"/random-busted"} className="Nav" >
                <button> fail button </button>
                </NavLink>
            </div>
            <div className="user-buttons">
                <NavLink to={"/random-user"} className="Nav" >    
                    <button> Random User Prompts </button>
                </NavLink>
                <NavLink to={"/user-submit"} className="Nav" >
                    <button> Submit Your Own Prompt! </button>
                </NavLink>
            </div>
        </section>
    )
}

export default Home