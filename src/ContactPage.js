import React from "react";
import Contact1 from "./contact1";
import Contact2 from "./contact2";
import { Helmet } from "react-helmet";
import { useEffect } from "react";


function Contact(){

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    return(
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <main>
                <Contact1 /><br></br><br></br>
                <Contact2 />
            </main>
        </>
    )
}

export default Contact;