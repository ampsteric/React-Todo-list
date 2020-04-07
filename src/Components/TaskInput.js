import React from 'react'

export default function TaskInput(props) {

    return (
        <div>
            <form onSubmit={props.clicked}>
            <input type="text" onChange={props.change} />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};
