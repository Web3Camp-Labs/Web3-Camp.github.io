import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function HeaderTop() {
    return <div className="header">
        <Container>
            <Row>
                <Col className="headerTxt" xs={12}>Web3 Camp</Col>
            </Row>
        </Container>
    </div>
}
