import React from 'react';
import { useHarperDB } from 'use-harperdb';
import Button from "react-bootstrap/Button";
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

function Movie(props) {
 

console.log(props.id);

  let [data, loading, error, refresh] = useHarperDB({
    query: {
      operation: 'sql',
      sql: `select * from collection.movie where key = ${props.id} `
    }
    /* interval: 40000 */
  }
  )
  
 


  if(loading) {
    return <div> Loading... </div>
  }


if(data) {
  console.log(data);
  
      return (

<Container id='total'>

<div className="movie-cover">
  <div className="top-information">

    <h2 className="title">{data[0].title}</h2>
    <div className="circle">
      <div className="ratings">
        <span className="big-half" id='movie'>{data[0].rating}</span>/<span className="small-half" id='movie'>10</span>
      </div>
    </div>
  </div>

  <div className="supporting-info">
    <span className="year" id='movie'>{data[0].date}</span> -
    <span className="time" id='movie'>{data[0].minutes}m</span>
  </div>
  
</div>

<div className="genres">
  <ul className="movie-genres" id='ul'>
    {data[0].genres.map((genre, index) => {
    return (
    <li key={index} id='li'><span className="movie-genre-item" id='movie'>{genre}</span></li>
  )
    })}
  </ul>
</div>

<div className="lower-information">
  <p id='p'>{data[0].description}</p>

  <hr />
  <p id='p'> Starring: {data[0].stars.map((star, index) => {
    return (
    <span key={index} id='movie'>{star} - </span>
    )
    })}
  </p>
 
  
  <hr />
  <p id='p'>Directors:
    {data[0].directors.map((director, index) => {
      return (
    <span key={index} className="director" id='movie'>{director} - </span>
    )
    })}
  </p>
  <hr />
  <div className="action-buttons">
    <a href={data[0].website} className="visit-movie-button">Visit Movie</a>
    <a href="" className="generate-movie-button" onClick={refresh} id='a'>GENERATE NEW MOVIE</a>
  </div>
</div>

{console.log({data})};
</Container>


)
} else {
    return (
      <div>Sorry No Data
        {error}
      </div>
  )
}

}

export default Movie
// Sad sad enger anxious happy enger enger sad anxious ; 