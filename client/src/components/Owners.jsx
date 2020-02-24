
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
            <br />
            <h1>Owners:</h1>
            <div className="ownerCard" >
                {owners.map(owner => (
                    <Card className="bg-dark text-white " style={{ width: '18rem' }} key={owner._id}>
                        <Card.Img src={owner.image} alt="Owner image" />
                        <Card.ImgOverlay className="d-flex  flex-column justify-content-end">
                            <Card.Title ><Link to={{
                                pathname: `/${owner._id}`,
                                owner: {
                                    name: owner.name
                                }
                            }} >
                                <h2>
                                    {owner.name}
                                </h2>
                            </Link>
                            </Card.Title>
                            <Card.Text >
                                <h3>
                                    {owner.location}
                                </h3>
                            </Card.Text >
                        </Card.ImgOverlay>
                    </Card>
                ))}
            </div>
            <br />
            <Button variant="primary" href="/newOwner">Add Owner</Button>
        </div>
    )
}
