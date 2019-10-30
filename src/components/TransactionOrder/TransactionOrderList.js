import React, { Component } from 'react'
import { Collection, CollectionItem } from 'react-materialize';
import TransactionOrder from './TransactionOrder';
import './TransactionOrder.css'

export class TransactionOrderList extends Component {

    render() {
        const { transactionOrderList } = this.props;
        return (
            <div>
                <Collection>
                    {transactionOrderList.map((transactionOrder, i) =>
                        <CollectionItem href="##" key={i} className="transaction-order-list">
                            <TransactionOrder transactionOrder={transactionOrder} />
                        </CollectionItem>
                    )}
                </Collection>
            </div>

        )
    }

}

export default TransactionOrderList
