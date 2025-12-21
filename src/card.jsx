import React from 'react'

function Card({ result }) {
    if (!result || result.length === 0) {
        return null;
    }
    return (
        <div>
            {result.map(({id,name,email,image}) => (<>
                <p key={id}>{name}</p>
                <p>{email}</p>
                <img src={image}/>
            </>))}
        </div>
    )
}

export default Card