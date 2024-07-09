import React from "react";
import Intro from "./intro";
import Second from "./Secondpart";
import Part3 from "./Part3";
import Slideshow from "./Slideshow";
import About from "./About";
import Launch from "./Launch";
import "./Style.css"
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Featured from "./Featured";

function Home(){

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    return (
        <>
            <Helmet>
                <title>Digital Sites</title>
            </Helmet>
            <main>
                <Intro /><br></br><br></br>
                <Second /><br></br><br></br>
                <Part3 /><br></br><br></br>
                <Slideshow /><br></br><br></br>
                <About /><br></br><br></br>
                <Launch />
                <Featured />
            </main>
        </>
    );
}

export default Home;
