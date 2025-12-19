import React, { useEffect, useState } from 'react'
import Card from './card'

function Home() {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    async function getData() {
        try {
            const res = await fetch(`https://68a582352a3deed2960dbd2c.mockapi.io/form/name`);
            const data = await res.json();

            if (data.length === 0) {
                setResults(null);
            } else {
                setResults(data)
                setError("")
            }
        } catch (error) {
            setError("something Went wrong")
        }
    }
    return (
        <>
            <button onClick={getData}>DATA</button>
            {error&&<p>{error}</p>}
            <Card result={results} />
        </>
    )
}

export default Home