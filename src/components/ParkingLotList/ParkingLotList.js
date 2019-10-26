import React, {Component} from 'react'
import ParkingLot from './ParkingLot'
import {Collection, CollectionItem, Row, Col} from 'react-materialize';

export class ParkingLotList extends Component {

    render() {
        const {parkingLotList} = this.props;
        return (
            <div>
                <Row>
                    <Col m={6} s={12}>
                <Collection>
                    {parkingLotList.map((parkingLot, i) =>
                        <CollectionItem href="#" key={i}>
                            <ParkingLot parkingLot={parkingLot}/>
                        </CollectionItem>
                    )}
                </Collection>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ParkingLotList
