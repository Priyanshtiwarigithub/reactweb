import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Homepic.jpg"
import './index.css';

const Common = (props) => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
<div className = "row">
<div className = "col-md-6 ps-5 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">

    <h1>
    {props.name} <strong className="brand-name">WebTech</strong></h1>
    <h4 className="my-3" >We are the team of talented developer making websites.</h4>
<div className = "mt-3">

<NavLink to={props.visit} type="button" href="" class="btn btn-outline-primary">{props.btname}</NavLink>
    
</div>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
 <img src={props.imgsrc} className="img-fluid animated" alt="Home" /> </div>
</div>
                    </div>
                </div>
</div>
</section>
    </>
    );
};
export default Common;