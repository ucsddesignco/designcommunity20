import React from 'react'
import { Row, Col } from 'react-grid-system';
import './scss/App.scss'

class Temp extends React.Component{
    render(){
        return(
            <Row className="temp" justify="center">
                <Col sm={12} xs={20}>
                    <img src={require("./images/dcoload.gif")} className="tempImg" draggable="false"/>
                </Col>
            </Row>
        );
    }
}

export default Temp;