import React,{useState} from 'react'

const Contact = () => {
const[data,setData]= useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    homeaddrs:"",
    text:""

});
const InputEvent = (event)=>{
const {name,value}=event.target;

setData((preval)=>{
return {
    ...preval,
    [name]: value,
};

});

};
    const formSubmit = (e) => {
    e.preventDefault();
    console.log(`${data.fname} ${data.lname} ${data.email} ${data.phone} ${data.homeaddrs} ${data.text}`);
    alert(`Name: ${data.fname} ${data.lname}   Email: ${data.email}   contact no: ${data.phone}`);

};


    return (<> <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
    </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

                    <form onSubmit = {formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                name="fname"
                                value={data.fname}
                                onChange={InputEvent}

                                placeholder="Name First" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"

                                name="lname"
                                value={data.lname}
                                onChange={InputEvent}

                                placeholder="Name Last" />
                        </div>


                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"

                                name="email"
                                value={ data.email}
                                onChange={InputEvent}

                                placeholder="name@mail.com" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1"

                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}

                                placeholder="Contact Number" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Home Address</label>
                            <input type="address" className="form-control" id="exampleFormControlInput1"

                                name="homeaddrs"
                                value={data.homeaddrs}
                                onChange={InputEvent}

                                placeholder="Place" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            
                            name="text"
                                value={data.text}
                                onChange={InputEvent}
                            ></textarea>
                        </div>


                   
                    <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit" >Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>);

};
export default Contact;