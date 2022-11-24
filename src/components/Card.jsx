import React from 'react';
import { initialState } from "../initialState";
import styles from "./Card.module.css"
const Card = (props) => {

    return (
        <div className={styles.container}>
            {props.data.map((el) => {
                return (
                    <div className="card" key={el.id} style={{ width: '18rem' }}>
                        <img src={el.img} className="card-img-top" alt={el.name} />
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">{el.price} Рублей</p>
                            <a href="/" className="btn btn-primary">Купить</a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Card;