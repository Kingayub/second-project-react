import React from 'react';
import styles from "./Card.module.css"

const Navbar = () => {
    return (
        <div >
            <ul className="nav flex-column">
                <li className="nav-item">
                    <h5>Intocode Coding Shopcamp</h5>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="!#">Гаджеты и аксессуары</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="!#">Бытовая техника</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='!#'>Прочее</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;