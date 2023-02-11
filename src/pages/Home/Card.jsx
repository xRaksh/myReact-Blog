import React from 'react';
import '../Pagstyle/home.css'
const Card = (props) => {
    return (
        <div>
            <div className="card_body">
                <div className="card" style={{ width: '25rem' }}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3>{props.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
