import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

function NewOwnerForm(props) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

const createOwner = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/user', {
                name:  name,
                location: location,
                image: image
            });

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Form onSubmit={createOwner}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formGroupLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder="Location" />
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

export default NewOwnerForm;