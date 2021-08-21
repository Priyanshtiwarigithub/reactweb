import React from 'react';
import web from "../src/Homepic.jpg"
import './index.css';
import Common from './Common';


const Home = () => {
    return (<>
    <Common  name="Grow your business with" 
        imgsrc={web}
         visit="/services" 
         btname="Get Started" /> 
  </>
    );
};
export default Home;