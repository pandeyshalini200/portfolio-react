import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" style={{width:'10rem', height:'13rem'}}>
                    <img src={props.imgsrc} id={props.id} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-align-center">{props.title}</h5>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;