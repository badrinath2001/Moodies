import React from 'react';
import "../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';  
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Helmet } from 'react-helmet';
import NavBar from '../components/Navbar';
const Home=()=>{
    
    let navigate = useNavigate();
   const handleInput=(e)=> {
       navigate(`/type:`);
       
   }
   const handleRandom=(e)=>{
    navigate(`/random`);
   }

        return (<>
            <NavBar/>
            <Container>
                <Helmet>
                    <style>{'body { background-image: url(https://i.pinimg.com/originals/b1/25/2a/b1252a6a01a76c89e27b0648ea855be2.jpg) ; }'}</style>
                   <style>{'body { background-repeat: no-repeat;}'}</style>
                    <style>{'body {background-size:cover}'}</style>
                </Helmet>
            <centre>
               
            <h3 id='title'>Moodies</h3>
               {/* <caption>Mood+Movies</caption><br/>*/}
                <div id='caption'>Discover a Movie that fits Your Mood</div>
                <Button variant="outline-success"  id='start' value="lang:" onClick={handleInput} >   Start </Button><br/><br/>
              <form> <fieldset><legend><div id="shufflecapt">Bit Confused? Then have a random movie</div></legend>
                <Button variant="outline-success"  id='shufflein' value="random" onClick={handleRandom} >   Shuffle In </Button><br/></fieldset></form>
            </centre>
            </Container>
            
            </>
        )
    }

export default Home;
