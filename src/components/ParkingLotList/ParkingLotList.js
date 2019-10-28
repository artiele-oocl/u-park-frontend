import React, {Component} from 'react'
import ParkingLot from './ParkingLot'
import ParkingLotModal from "./ParkingLotModal";
import {Collection, CollectionItem, Row, Col, Modal, Button} from 'react-materialize';


export class ParkingLotList extends Component {
    render() {
        const {parkingLotList} = this.props;
        return (
            <div>
                <Row>
                    <Col m={6} s={12}>
                        <Collection>
                            {parkingLotList.map((parkingLot, i) =>
                                <Modal bottomSheet trigger={
                                    <CollectionItem href="#" key={i} onClick={this.showModal}>
                                        <ParkingLot parkingLot={parkingLot} />

                                    </CollectionItem>
                                }>
                                    <ParkingLotModal parkingLot={parkingLot}/>
                                </Modal>
                            )}

                        </Collection>

                    </Col>
                </Row>

            </div>

        )
    }

}

export default ParkingLotList
