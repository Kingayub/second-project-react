import React from 'react';
import { initialState } from "../initialState";
import styles from "./Card.module.css"
const Card = () => {

    return (
        <>
            {initialState.map((el) => {
                return (
                    <div className="card" key={el.id} styles={{ width: '200px' }}>
                        <img src={el.img} className="card-img-top" alt={el.name} />
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">{el.price} Рублей</p>
                            <a href="/" className="btn btn-primary">Купить</a>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Card;