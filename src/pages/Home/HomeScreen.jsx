import React from 'react'
import './Home.css'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/row/Row'
import requests from '../../utils/request'

const HomeScreen = () => {
  return (
     <>
     <div className="homeScreen">
       <Nav />
       <Banner />
       <Row  title="NETFLIX ORIGINALS" isLarge
       fetchUrl={requests.fetchNetflixOriginals} />
 <Row  title="Trending Now" 
       fetchUrl={requests.fetchTrending}  />
       <Row  title="Top Rated" 
       fetchUrl={requests.fetchTopRated}  />
       <Row  title="Action Movies" 
       fetchUrl={requests.fetchActionMovies}  />
       <Row  title="Comedy Movies" 
       fetchUrl={requests.fetchComedyMovies}  />
       <Row  title="Horror Movies" 
       fetchUrl={requests.fetchHorrorMovies}  />
        <Row  title="Romance Movies" 
       fetchUrl={requests.fetchRomanceMovies}  />
        <Row  title="Documentaries" 
       fetchUrl={requests.fetchDocumentaries}  />
        <Row  title="Top Kdramas" 
       fetchUrl={requests.fetchKdramas}  />
        <Row  title="Top Chinese Movies" 
       fetchUrl={requests.fetchChineseMovies}  />
        <Row  title="Top Japanese Movies" 
       fetchUrl={requests.fetchJapaneseMovies}  />

     </div>
     </>
  )
}

export default HomeScreen