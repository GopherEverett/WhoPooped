import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import PoopButton from './PoopButton';
import { Card } from 'react-bootstrap'
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
            {/* <h1> Dogs:</h1> */}
            <div className="dogCards">
                {dogs.map((dog, idx) => (
                    <Card key={dog._id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dog.image} />
                        <h1>{dog.name}</h1>
                        <h2>{dog.breed}</h2>
                        <h3>Last Poop:</h3>
                        <Moment fromNow>{dog.latestpoop}</Moment>
                        <PoopButton dog={dog} idx={idx} handlePoop={handlePoop} />
                    </Card>
                ))}
            </div>
        </div>
    )
}
