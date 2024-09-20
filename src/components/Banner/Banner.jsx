import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from "../../utils/axios"
import requests from "../../utils/request"

const Banner = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
       const fetchData =async()=>{
        const request=await axios.get(requests.fetchNetflixOriginals)
         setMovie(request.data.results[
            Math.floor(Math.random()* request.data.results.length-1)
         ])
         return request;
       }
       fetchData();
      
    },[])
    function truncate(string,n){
       return string?.length>n ? string.substr(0,n-1)+ "...":string
    }
    console.log(movie)
  return (
    <>
    <header style={{
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize:'cover',
      backgroundPosition:'center center'
      
    }}>
      <div className="banner-contents">
          <h1 className='banner-title'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <div className="banner-des">
                  {truncate(movie?.overview,150)}
          </div>
      </div>
           <div className="banner-fade"/>
    </header>
    </>
  )
}

export default Banner