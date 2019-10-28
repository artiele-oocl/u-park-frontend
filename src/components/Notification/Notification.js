import React, {Component} from 'react'
import logo from '../../logo.jpg'
import {Collection, CollectionItem, Row, Col} from 'react-materialize';
export class Notification extends Component {
    render() {
        return (
            <div>
            <Row>
                <Col style={{float: 'left', textAlign: 'left'}}><img style={{padding: '5px', width: '100px', align: 'left'}} src={logo} alt='logo'/>
                </Col>
            </Row>
               <Row>
               <Col style={{float: 'left', textAlign: 'left'}}>
                Notifications
                </Col>
                </Row>

                <Row>
                    <Col m={6} s={12}>
                        <Collection>
                            <CollectionItem>
                                <Row>
                                    <Col style={{float: 'left', textAlign: 'left'}}>
                                        Title
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{float: 'left', fontSize: '11px'}}>
                                        Description
                                    </Col>
                                </Row>
                            </CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Notification;
