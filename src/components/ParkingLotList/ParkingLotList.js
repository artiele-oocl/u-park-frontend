import React, {Component} from 'react'
import ParkingLot from './ParkingLot'
import {Collection, CollectionItem, Row, Col, Modal, Button} from 'react-materialize';
import ParkingLotModal from "./ParkingLotModal";


export class ParkingLotList extends Component {

    setParkingLotDetail = (parkingLotDetails) => {
        this.props.selectedParkingLot(parkingLotDetails);
    }

    render() {
        const {parkingLotList} = this.props;
        return (
            <div>
                <Row>
                    <Col m={6} s={12}>
                        <Collection>
                            {parkingLotList.map((parkingLot, i) =>
                                <Modal bottomSheet trigger={
                                    <CollectionItem href="#" key={i}>
                                        <ParkingLot parkingLot={parkingLot} />

                                    </CollectionItem>
                                }>
                                    <ParkingLotModal parkingLot={parkingLot} selectParkingLot={this.setParkingLotDetail} />

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
