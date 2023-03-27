import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Experience = () => {
    return (
        <>
        <section id='header' >
            <div className='my-5'>
                <h1 className='text-center'>EXPERIENCES</h1>
                <h2 className='my-3 text-center'> These Are The Technologies I Have Worked With</h2>
                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-6 mx-auto'>
                            <div className='row gy-4 gx-4'>
                                {
                                    Sdata.map((val, ind) => {
                                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Experience;