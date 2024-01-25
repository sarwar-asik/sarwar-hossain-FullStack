import React from 'react';
import "./project.css";

export default function SIngleProject() {
    return (
        <div className="card">
            <div className="card__image">

            </div>
            <div className="card__content">
                <p className="card__title">Card Title</p>
                <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="card__button" href="#">Read More</a>
            </div>
        </div>
    )
}
