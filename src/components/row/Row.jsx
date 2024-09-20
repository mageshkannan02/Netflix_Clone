import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../utils/axios';


const Row = ({title,fetchUrl,isLarge=false}) => {
    const [movies,setmovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        const fetchData=async()=>{
            const request=await axios.get(fetchUrl);
             setmovies(request.data.results);
             return request;

        }
        fetchData()
    },[fetchUrl])
   
  return (
    <>
     <div className='row'>
  <h2>{title}</h2>
  <div className="row-posters">
    {
        movies.map((movie)=>(
            ((isLarge && movie.poster_path )|| (!isLarge && movie.backdrop_path)) &&(
                <img key={movie.id} src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt="" className={`row-poster ${isLarge && "row-posterLarge" }`} />
            )
        ))
    }
  </div>
     </div>

    </>
   
  )
}

export default Row