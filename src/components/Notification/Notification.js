import React from 'react'
import logo from '../../logo.png'
import { Row, Col, CollapsibleItem, Collapsible } from 'react-materialize';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import './Notification.css'
import NotificationsIcon from '@material-ui/icons/Notifications';



export default function Notification() {
    
        return (
            <div style = {{marginLeft: '15px', marginRight: '15px', marginTop:'20px'}}>
                <br/>
                <Row>
                    <Col style={{float: 'left'}}>
                        <img style={{ width: '100px'}}
                             src={logo} alt='logo' />
                    </Col>
                    <Col style={{float: 'right'}}>
                        <NotificationsIcon style={{fontSize: '5rem', color: 'grey'}}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingLeft: '0px'}}>
                        <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginTop: '8px', marginBottom: '0px', position:'center'}}>
                            Notifications
                        </p>
                    </Col>
                </Row>

                <div >

                    
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