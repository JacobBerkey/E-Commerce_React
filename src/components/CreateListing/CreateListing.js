import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap';



function CreateListing() {
    return (
        <React.Fragment>
            <h1>Create Listing For Sale</h1>
                <Form>
                    <Row>
                    <Col>
                    <Form.Control placeholder="Product Name" />
                        </Col>
                        <br />
                        <Col>
                    <Form.Control placeholder="Product Description" />
                        </Col>
                        <br />
                        <Col>
                    <Form.Control placeholder="Category" />
                        </Col>
                        <br />
                        <Col>
                    <Form.Control placeholder="Price" />
                    </Col>
                    </Row>
                    <br />
                    <Button variant="danger">Submit</Button>
                </Form>
        </React.Fragment>
    )
}

export default CreateListing;