import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DIc4yAjGXhGKBp3FHZcncuhG9VW1JC5i';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    renderMovieReviews = () => {
        return this.state.reviews.map(review => {
            return (<MovieReviews review={review} key={review.display_title}/>)
        })
    }
 
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name='search' 
                    value={this.state.searchTerm}
                    onChange={(e) => this.handleChange(e)}
                    placeholder='Search'
                    />
                </form>
                <div className='review-list'>
                    {this.state.reviews.length === 0 ? null : <h2>Found {this.state.reviews.length} Results:</h2>}
                    {this.renderMovieReviews()}
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer