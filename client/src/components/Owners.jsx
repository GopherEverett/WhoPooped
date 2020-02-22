
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

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
                <div className="ownerCard" key={owner._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={owner.image} />
                        <Link to={{
                            pathname: `/${owner._id}`,
                            owner: {
                                name: owner.name
                            }
                        }} ><h2>{owner.name}</h2></Link>
                        <Card.Text>Location: {owner.location}</Card.Text>
                    </Card>
                </div>
            ))}
            <Button variant="secondary" href="/newOwner">Add Owner</Button>
        </div>
    )
}
