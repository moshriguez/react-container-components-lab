import React from 'react'

const MovieReviews = ({review}) => {
    // console.log(review)
    return (<div className='review'>
        <h2>{review.display_title}</h2>
        <img src={review.multimedia === null ? 'https://www.kevingage.com/assets/clapboard.png' : review.multimedia.src} 
        alt={review.display_title}/>
        <p>Rated: {review.mpaa_rating}</p>
        <p>{review.summary_short}</p>
        <h3>{review.headline}</h3>
        <p>by {review.byline}</p>
        <a href={review.link.url}>{review.link.suggested_link_text}</a>
    </div>)
}

// sample of json data
// {
//     "display_title": "Triumph",
//     "mpaa_rating": "PG-13",
//     "critics_pick": 0,
//     "byline": "Ben Kenigsberg",
//     "headline": "‘Triumph’ Review: Going to the Mat",
//     "summary_short": "The film tells the story of an aspiring high school wrestler with cerebral palsy.",
//     "publication_date": "2021-04-30",
//     "opening_date": null,
//     "date_updated": "2021-04-30 04:02:03",
//     "link": {
//         "type": "article",
//         "url": "https://www.nytimes.com/2021/04/30/movies/triumph-review.html",
//         "suggested_link_text": "Read the New York Times Review of Triumph"
//     },
//     "multimedia": {
//         "type": "mediumThreeByTwo210",
//         "src": "https://static01.nyt.com/images/2021/04/28/arts/triumph1/merlin_186944010_59f419c0-c97b-4465-aa65-18bf734026a9-mediumThreeByTwo440.jpg",
//         "height": 140,
//         "width": 210
//     }
// }

export default MovieReviews