import React, { Component } from 'react'
import NavBar from '../components/Navbar';
import Select from '../components/Select';
const Result=(props)=>{
    let mood=props.mood;
    return(
        <>
        <NavBar/>
        <Select mood={mood}/>
    
        </>
    )
} 
export default Result;