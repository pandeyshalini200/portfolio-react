import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname:'',
        email:'',
        phone:'',
        msg:'',
    });

    const InputEvent =(event)=>{
        const { name, value } = event.target;

        setData((preVal) =>{
            return {
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number ${data.phone} and email is ${data.email}, Here is what i want to say is ${data.msg}`)
    };

    return (
        <>
            <div className='="my-5'>
                <h1 className='text-center'> Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Full Name" />
                            </div>

                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Email" />
                            </div>

                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Mobile No." />
                            </div>

                            <div className="mb-3">
                                <label htmlfor="exampleFormControlTextarea1" className="form-label">message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;