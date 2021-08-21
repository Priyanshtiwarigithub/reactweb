import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import  Navbar from './Navbar';
import Footer from "./Footer";

import { Switch , Route , Redirect } from 'react-router-dom';

const App = () => {
    return ( <>
    <Navbar />
    <Switch>
    
    <Route exact path = "/" component={Home} />
    <Route exact path = "/about" component={About} />
    <Route exact path = "/services" component={Services} />
    <Route exact path = "/Contact" component={Contact} />
    <Redirect to = "/" />
</Switch>
  <Footer/> 
 
    </> 
    
    );
    };

export default App;