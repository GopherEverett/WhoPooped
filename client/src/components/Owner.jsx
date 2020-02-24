import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import PoopButton from './PoopButton';
import { Card, Button } from 'react-bootstrap'
import swal from '@sweetalert/with-react'

export default function Owner(props) {
    const [dogs, setDogs] = useState([])

    const handlePoop = (dogId, idx, dog) => {
        swal({
            buttons: true,
            icon: "warning",
            content: (
                <div>
                    <h2>YAY!</h2>
                    <h2>Did {dog.name} really poop?</h2>
                </div>
            )
        }).then((value) => {
            if (value) {
                const date = Date.now()
                Axios.put(`/api/dog/${dogId}`, {
                    latestpoop: date
                }).then((res) => {
                    const updatedDogs = dogs.map((dog, index) => {
                        if (index !== idx) return dog
                        return res.data
                    })
                    setDogs(updatedDogs)
                    swal("Poop updated!", {
                        icon: "success",
                    });
                })
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await Axios.get(`api/dog/byOwner/${props.match.params.ownerId}`)
            setDogs(res.data)
        }
        fetchData()
    }, [props.match.params.ownerId])
    return (
        <div>
            <div className="dogCards">
                {dogs.map((dog, idx) => (
                    <Card className="bg-dark text-white " key={dog._id} style={{ width: '20rem', marginBottom: '10px' }}>
                        <Card.Img src={dog.image} alt="Dog image" />
                        <Card.ImgOverlay className="d-flex  flex-column justify-content-end">
                            <Card.Title ><h1>{dog.name}</h1></Card.Title>
                            <Card.Text >
                                Last poop:
                            </Card.Text >
                                <Moment fromNow>{dog.latestpoop}</Moment>
                            <PoopButton  dog={dog} idx={idx} handlePoop={handlePoop} />
                        </Card.ImgOverlay>
                    </Card>
                ))}
            </div>
            <br/>
            <Button variant="primary" href={`/${props.match.params.ownerId}/newDog`}>Add Dog</Button>
        </div>
    )
}
