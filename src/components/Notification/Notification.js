import React from 'react'
import logo from '../../logo.jpg'
import { Row, Col, CollapsibleItem, Collapsible } from 'react-materialize';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import './Notification.css'

export default function Notification() {
    
        return (
            <div>
                <Row>
                    <Col style={{ float: 'left', textAlign: 'left' }}><img style={{ padding: '5px', width: '100px', align: 'left' }} src={logo} alt='logo' />
                    </Col>
                </Row>

                <div style = {{marginLeft: '15px', marginRight: '15px'}}>
                    <Row>
                        <Col>Notifications</Col>
                    </Row>
                    
                    <Row>
                        <Collapsible className = "colapse">
                            <CollapsibleItem header="Better safe than sorry. That's my motto."  icon ={ <ArrowDropDownOutlinedIcon/>}>
                                <span  style={{color: 'grey'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</span>
                            </CollapsibleItem>
                            <CollapsibleItem header="Drive safely!"  icon ={ <ArrowDropDownOutlinedIcon/>}>
                                <span  style={{color: 'grey'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</span>
                            </CollapsibleItem>
                            <CollapsibleItem header="UPark promos..."  icon ={ <ArrowDropDownOutlinedIcon/>}>
                            <span  style={{color: 'grey'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</span>
                            </CollapsibleItem>
                        </Collapsible>
                    </Row>
                </div>

            </div>
        )
}