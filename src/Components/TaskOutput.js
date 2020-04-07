import React from 'react'

export default function Task(props) {
    const items=props.items;
    const listitems=items.map(item=>{
        return <div className="list" key="item.key">
            <p>{item.text}</p>
        </div>
    })
    return (
        <div class="task">
{listitems}
        </div>
    )
}
