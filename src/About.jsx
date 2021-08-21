import React from 'react'
import web14 from "../src/images/about.jpg"
import { NavLink } from "react-router-dom";
import Common from './Common';

const About = () => {
    return (<>
        <Common name="Welcome to About page" 
        imgsrc={web14}
         visit="/contact" 
         btname="Contact Now" />


         
     </>);
};



export default About;

