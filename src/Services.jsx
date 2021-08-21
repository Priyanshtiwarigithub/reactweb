import React from 'react'

import web1 from "../src/images/img1.jpg"
import web2 from "../src/images/img2.jpg"
import web3 from "../src/images/img3.jpg"
import web4 from "../src/images/img4.jpg"
import web5 from "../src/images/img5.jpg"
import web6 from "../src/images/img6.jpg"
import web7 from "../src/images/img7.jpg"
import web8 from "../src/images/img8.jpg"
import web9 from "../src/images/img9.jpg"
const Services = () => {
    return (<>  
    <div className = "my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
<div className = "row">
<div className="col-10 mx-auto">
<div className="row gy-4">
<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web3} class="card-img-top" alt="Web Development"/>
  <div class="card-body">
    <h5 class="card-title">Web Development</h5>
    <p class="card-text">We provide the services related to the static and the dynamic websites Development.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>


<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web2} class="card-img-top" alt="Software Dvelopment"/>
  <div class="card-body">
    <h5 class="card-title">Software Dvelopment</h5>
    <p class="card-text">The services related to the Software Development is also available according to the user requirement.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>


<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web1} class="card-img-top" alt="App Development"/>
  <div class="card-body">
    <h5 class="card-title">App Development</h5>
    <p class="card-text">We create deffreant types of Apps which fullfill the market and the user needs.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>


<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web4} class="card-img-top" alt="Cloud Services"/>
  <div class="card-body">
    <h5 class="card-title">Cloud Services</h5>
    <p class="card-text">Cloud services are also available according to requirement on minimum cost.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>


<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web9} class="card-img-top" alt="Digital Marketing"/>
  <div class="card-body">
    <h5 class="card-title">Digital Marketing</h5>
    <p class="card-text">Now you can promot your product with us WebTech provide Digital Marketing on lots of platforms.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>


<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web6} class="card-img-top" alt="Database Management"/>
  <div class="card-body">
    <h5 class="card-title">Database Management</h5>
    <p class="card-text">We also manage your data with for safety and security. Join us The WebTech</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>

<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web8} class="card-img-top" alt="Cloud Services"/>
  <div class="card-body">
    <h5 class="card-title">Data Security</h5>
    <p class="card-text">We provide data security to secure you most import data with threats and bugs.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>

<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web5} class="card-img-top" alt="Cloud Services"/>
  <div class="card-body">
    <h5 class="card-title">AI services
    </h5>
    <p class="card-text">The WebTech is also work for the AI services to make your product more interactive with customers.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>

<div className="col-md-4 col-10 mx-auto">
<div class="card" >
  <img src={web7} class="card-img-top" alt="Cloud Services"/>
  <div class="card-body">
    <h5 class="card-title">SEO Services</h5>
    <p class="card-text">We provide the SEO services to improving the quality and quantity of website.</p>
    <a href="#" class="btn btn-primary">Know more</a>
  </div>
  
</div>
</div>


</div>
</div>
</div>

</div>

    </>);
};
export default Services;