import React from "react";
import {Row, Col } from 'react-materialize';
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";


export default class AfterCheckout extends React.Component {
    state = {
        rating: 0
    }

    changeRating = (newRating) => {
        this.props.onRate(54, newRating);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col style={{float: 'center', fontSize: '5em'}}>
                        <Link to='/parkinglotlist'>
                            <StarRatings
                                rating={this.state.rating}
                                starHoverColor="yellow"
                                numberOfStars={5}
                                changeRating={this.changeRating}
                                starDimension="40px"
                                starSpacing="0.5px"
                                name='rating'>
                            </StarRatings>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}