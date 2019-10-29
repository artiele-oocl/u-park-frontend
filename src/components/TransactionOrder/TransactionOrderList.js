import React, {Component} from 'react'
import {Collection, CollectionItem, Row, Col} from 'react-materialize';
import TransactionOrder from './TransactionOrder';
import './TransactionOrder.css'

export class TransactionOrderList extends Component {

    render() {
        const {transactionOrderList} = this.props;
        return (
            <div>
                <Row>
                    <Col m={6} s={12}>
                        <Collection>
                            {transactionOrderList.map((transactionOrder, i) =>
                                <CollectionItem href="#" key={i} className="transaction-order-list">
                                <TransactionOrder transactionOrder={transactionOrder} />
                                </CollectionItem>
                            )}
                        </Collection>
                    </Col>
                </Row>
            </div>

        )
    }

}

export default TransactionOrderList
