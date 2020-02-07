import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import PoopButton from './PoopButton';

export default function Owner(props) {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`api/dog/byOwner/${props.match.params.ownerId}`)
            setDogs(res.data)
        }
        fetchData()
    }, [props.match.params.ownerId])
    return (
        <div>
            <h1> Dogs:</h1>
            {dogs.map(dog => (
                <div key={dog._id}>
                    <h1>{dog.name}</h1>
                    <h2>{dog.breed}</h2>
                    <h3>Last Poop:</h3>
                    <Moment fromNow>{dog.latestpoop}</Moment>
                    <PoopButton dog={dog} />
                </div>
            ))}
        </div>
    )
}
