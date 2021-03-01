import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

export default function A2Z() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={2} md={6}><p>col xs={2} md={6}</p></Col>
                    <Col xs={2} md={6}><p>col xs={2} md={6}</p></Col>
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <Col xs={2} md={6}><p>col xs={2} md={6}</p></Col>
                    <Col xs={2} md={6}><p>col xs={2} md={6}</p></Col>
                </Row>
            </Container> */}
        </>
    )
}