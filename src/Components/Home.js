import React from 'react';
import img1 from "./Images/img1.JPG";

const Home = () => {
    return (
        <>
            <section id="header" className='d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column'>
                                    <h1 className='brand-name'>
                                        I Am A MERN Stack Developer 
                                    </h1>
                                    <h2 className='my-3'>
                                        I am an Intern  at Knackline Company which helps me grow and develop my skill set for future. I have made various websites and currently, I love to work onweb application using technologies like React, Bootstrap, Javascript and HTML.
                                    </h2>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={img1} className='img-fluid animated' alt='home img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;