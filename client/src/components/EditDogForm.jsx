import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

function EditDogForm(props) {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState('')
    const [toHome, setToHome] = useState(false)

const editDog = async (e) => {
        e.preventDefault()
        try {
            await axios.put('/api/dog', {
                name:  name,
                breed: breed,
                age: age,
                image: image,
                owner: props.match.params.ownerId
            });
            setTimeout(()=> setToHome(true), 2000)
        }
        catch (err) {
            console.log(err)
        }
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
        {toHome ? <Redirect to={`/${props.match.params.ownerId}`} /> : null}
            <Form onSubmit={editDog}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formGroupBreed">
                    <Form.Label>Breed</Form.Label>
                    <Form.Control value={breed} onChange={e => setBreed(e.target.value)} type="text" placeholder="Breed" />
                </Form.Group>
                <Form.Group controlId="formGroupAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={e => setAge(e.target.value)} type="number" placeholder="Age" />
                </Form.Group>
                <Form.Group controlId="formGroupImg">
                    <Form.Label>Image</Form.Label>
                    <Form.Control value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="Image URL" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default EditDogForm;