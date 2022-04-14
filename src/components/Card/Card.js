import React from 'react';
import './Card.css';
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Card({id, title, description, price, url, onDelete}) {

    const deleteSelf = () => {
        onDelete(id);
    }

    console.log(id);
    return (
        <div className="card">
            {/* <img className="card--img" alt="" src={require('../../images/item_images/' + id + '.jpeg')}/> */}
            <img className="card--img" alt="" src={url}/>
            <div className="card--title">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <p className="card--desc">{description}</p>
            <div>
                <IconButton aria-label="delete" size="small" onClick={deleteSelf}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    );
}