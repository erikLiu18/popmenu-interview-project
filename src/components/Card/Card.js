import React from 'react';
import './Card.css'

export default function Card({id, title, description, price}) {
    console.log(id);
    return (
        
        <div className="card">
            <img className="card--img" src={require('../../images/item_images/' + id + '.jpeg')}/>
            <div className="card--title">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <p className="card--desc">{description}</p>
            
        </div>
    );
}