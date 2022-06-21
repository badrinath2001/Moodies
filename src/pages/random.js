import React, { Component } from 'react'
import Movie from '../components/Movie'
import NavBar from '../components/Navbar';

const Random=()=>{
    const myid=`${Math.floor(Math.random() * 30) }`;

    return(<>
        <NavBar/>
        <Movie id={myid}/></>
    )
}
export default Random;