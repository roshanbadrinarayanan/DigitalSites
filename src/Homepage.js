import React from "react";
import Intro from "./intro";
import Second from "./Secondpart";
import Part3 from "./Part3";
import Slideshow from "./Slideshow";
import About from "./About";
import Launch from "./Launch";
import "./Style.css"


function Home(){

    return (
        <main>
            <Intro /><br></br><br></br>
            <Second /><br></br><br></br>
            <Part3 /><br></br><br></br>
            <Slideshow /><br></br><br></br>
            <About /><br></br><br></br>
            <Launch />
        </main>
    );
}

export default Home;
