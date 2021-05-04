import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DIc4yAjGXhGKBp3FHZcncuhG9VW1JC5i';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    renderMovieReviews = () => {
        return this.state.reviews.map(review => <MovieReviews review={review} key={review.display_title}/>)
    }

    render() {
        // console.log(this.state.reviews)
        return (
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews</h1>
                <div className='review-list'>
                    {this.renderMovieReviews()}
                </div>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer