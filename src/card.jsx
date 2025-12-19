import React from 'react'

function Card({ result }) {
    if (!result || result.length === 0) {
        return null;
    }
    return (
        <div>
            {result.map(item => (<>
                <p key={item.id}>{item.name}</p>
                <img src={item.image}/>
            </>))}
        </div>
    )
}

export default Card