import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';



function CreateListing() {
    return (
        <React.Fragment>
            <h1>Create Listing For Sale</h1>
            <br />
                <Form>
                    <Row>
                    <Col>
                    <br />
                    <Form.Control placeholder="Product Name" />
                    <br />
                        </Col>
                        <br />
                        <br />
                        <br />
                            <Form.Select>
                                <option>Category:</option>
                                    <option value="1">Amp</option>
                                    <option value="2">Drums</option>
                                    <option value="3">Guitar</option>
                                    <option value="3">Keyboard</option>
                                    <option value="4">Live Sound</option>
                            </Form.Select>
                        <br />
                        <Col>
                        <br />
                    <Form.Control placeholder="Price" />
                    </Col>
                    <br />
                    <Col>
                    <br />
                    <Form.Control placeholder="Description" />
                    </Col>
                    <br />
                    </Row>
                    <br />
                    <Button variant="danger">Submit</Button>
                </Form>
        </React.Fragment>
    )
}

export default CreateListing;