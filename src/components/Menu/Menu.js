import React from 'react';
import './Menu.css';
import {Card} from '../../index.js'

export default function Menu({data}) {
    return (
        <main>
            <div className='menu'>
                {console.log(data)}
                {data.map((item) => {
                    const {id, title, description, price, url} = item;
                    return (
                        <Card key={id} id={id} title={title} description={description} price={price} url={url}/>
                    )
                })}
            </div>
        </main>
    );
}