"use client";
import React, { BaseSyntheticEvent } from 'react'

export default function SignUpForm() {

    const submitHandler = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.target))
        console.log('Form values:', values);

        ////! console  Form values:  { username: 'sarwarasik@gmail.com', password: '123456' }
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
