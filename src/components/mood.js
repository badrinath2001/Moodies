import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import '../styles/mood.css';
import { Col, Container, Row } from 'react-bootstrap';

const Mood=()=>{
    let navigate = useNavigate();
   var moodt="";  
   const handleInput=(e)=> {
       e.preventDefault();      
       moodt=`${e.target.value}`;  
       if(moodt!=0){navigate(`/${moodt}`);}
    }   
    const handleMouse=(e)=>{
        let id=`${e.target.id}`;
        if(`${id}`=="sad"){ document.getElementById('sad').innerHTML="&#128546;";}
        else if(`${id}`==="Happy"){document.getElementById('Happy').innerHTML="&#128512;";}
        else if(`${id}`==="Angry"){document.getElementById('Angry').innerHTML="&#128545;";}
        else if(`${id}`==="Energetic"){document.getElementById('Energetic').innerHTML="&#128526;";}
        else if(`${id}`==="Shocked"){document.getElementById('Shocked').innerHTML="&#128528;";}
        else if(`${id}`==="Anxious"){document.getElementById('Anxious').innerHTML="&#128556;";}
    }
    const handleleave=(e)=>{
        let id=`${e.target.id}`;
        if(`${id}`==="sad"){ document.getElementById('sad').innerHTML="Sad";}
        else if(`${id}`==="Happy"){document.getElementById('Happy').innerHTML="Happy";}
        else if(`${id}`==="Angry"){document.getElementById('Angry').innerHTML="Angry";}
        else if(`${id}`==="Energetic"){document.getElementById('Energetic').innerHTML="Energetic";}
        else if(`${id}`==="Shocked"){document.getElementById('Shocked').innerHTML="Shocked";}
        else if(`${id}`==="Anxious"){document.getElementById('Anxious').innerHTML="Anxious";}
    }
    
    
    return(
        <Container>  
       
           
         <Row id='Row'>
             <Col>
             <button   id='sad' value="Sad" onMouseEnter={handleMouse} onMouseLeave={handleleave} onClick={handleInput}>   Sad </button>
             </Col>
         </Row>
         <Row id='Row'>
             <Col> <button id='Happy' value="Happy" onMouseEnter={handleMouse} onMouseLeave={handleleave} onClick={handleInput}>   Happy </button>
             </Col>
             <Col> <button id='Angry' value="Angry" onMouseEnter={handleMouse} onMouseLeave={handleleave} onClick={handleInput}>   Angry </button>
             </Col>
         </Row>
         <Row id='Row'>
             <Col>
             <button  id='Energetic' value="Energetic" onMouseEnter={handleMouse} onMouseLeave={handleleave} onClick={handleInput}>   Energetic </button></Col>
             

         </Row>
     
         <Row id='Row'>
         <Col>
         <button   id='Shocked' value="Shocked" onMouseEnter={handleMouse} onMouseLeave={handleleave} onClick={handleInput}>   Shocked </button></Col>
            <Col>
            <button   id='Anxious' value="Anxious" onMouseEnter={handleMouse} onMouseLeave={handleleave} onClick={handleInput}>  Anxious  </button></Col>

         </Row>
          
         
           

             
              
        
        </Container>
    )
    
}
export default Mood;