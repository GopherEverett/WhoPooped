
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Owners() {
    const [owners, setOwners] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const res = await axios.get('/api/user')
        setOwners(res.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>Owners:</h1>
            {owners.map(owner => (
                <Link to={{
                    pathname: `/${owner._id}`,
                    owner: {
                        name: owner.name
                    }
                }} key={owner._id}><h2>{owner.name}</h2></Link>
            ))}
        </div>
    )
}
