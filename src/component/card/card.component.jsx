import React from 'react';


import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        {console.log(props)}
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
);