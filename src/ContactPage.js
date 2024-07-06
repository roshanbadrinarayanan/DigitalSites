import React from "react";
import Contact1 from "./contact1";
import Contact2 from "./contact2";
import { Helmet } from "react-helmet";


function Contact(){
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