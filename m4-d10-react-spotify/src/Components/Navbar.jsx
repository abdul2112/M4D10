import React from "react"
import {Row, Col, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <>
            <Row>
                <Col md={3} style={{backgroundColor: "black"}}>
                    <Nav className="flex-column">
                        <Nav.Item>
                            
                            <img    
                        src='..' className='img-fluid'
                          alt="spotify logo"
                      />
                        </Nav.Item>
                        <Nav.Item>
                            
                                Home
                        </Nav.Item>
                        <Nav.Item>
                            
                                Search
                        </Nav.Item>
                        <Nav.Item>
                            
                                Your Library
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            </>
        )
    }
}

export default Navbar;