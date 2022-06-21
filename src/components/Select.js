import React from "react";
import { useHarperDB } from 'use-harperdb';
import { useCookies } from "react-cookie";
import { Container,Row,Col } from "react-bootstrap";
const Select=(props)=>{
   
   
    let moodt=`${props.mood}`;
    console.log(`${moodt}`);
    let [data, loading, error, refresh] = useHarperDB({
        query: {
          operation: 'sql',
          sql: `select * from collection.movie where mood='${moodt}'  `
        }
        /* interval: 40000 */
      }
      )

      const [cookie,setcookie]=useCookies(["movie"]);
     
    
    
      if(loading) {
        return <div> Loading... </div>
      }
    
    
    if(data) {
      let length=`${data.length}`;
      console.log(length);
      var r=`${Math.floor(Math.random() * length)}`;
      console.log(r);
          return (
    <Container id='total'>
    
    <div className="movie-cover">
      <div className="top-information">
        <h2 className="title">{data[r].title}</h2>
        <div className="circle">
          <div className="ratings">
            <span className="big-half" id='movie'>{data[r].rating}</span>/<span className="small-half" id='movie'>10</span>
          </div>
        </div>
      </div>
    
      <div className="supporting-info">
        <span className="year" id='movie'>{data[r].date}</span> -
        <span className="time" id='movie'>{data[r].minutes}m</span>
      </div>
      
    </div>
    
    <div className="genres">
      <ul className="movie-genres" id='ul'>
        {data[r].genres.map((genre, index) => {
        return (
        <li key={index} id='li'><span className="movie-genre-item" id='movie'>{genre}</span></li>
      )
        })}
      </ul>
    </div>
    
    <div className="lower-information">
      <p id='p'>{data[r].description}</p>
    
      <hr />
      <p id='p'> Starring: {data[r].stars.map((star, index) => {
        return (
        <span key={index} id='movie'>{star}  </span>
        )
        })}
      </p>
     
      
      <hr />
      <p id='p'>Directors:
        {data[r].directors.map((director, index) => {
          return (
        <span key={index} className="director" id='movie'>{director}  </span>
        )
        })}
      </p>
      <hr />
      <div className="action-buttons">
        <a href={data[r].website} className="visit-movie-button" onClick={()=>{setcookie("title",`data.[r].title`)}}>Visit Movie</a>
        <a href="" className="generate-movie-button" onClick={refresh} id='a'>GENERATE NEW MOVIE</a>
      </div>
    </div>
    {console.log({data})}
  {/* {data.map((da)=>{
    return(
        <center>
        <Col>
          <Row >
            <h3>{da.title}</h3>
          </Row>
          <Row >
            <h6>
            {da.genres.map((genre, index) => {
        return (
        <span >{genre} &nbsp;&nbsp;&nbsp;&nbsp;</span>
      )
        })}
            </h6>
          </Row>
        </Col>
        </center>
    
      )
    })}*/}
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
export default Select;