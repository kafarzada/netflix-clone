import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
    return (
        <div className="homeScreen"> 
            {/* NAVBAR */ }
            <Nav />

            {/* Banner */ }
            <Banner />

            
            {/* ROWS */ }
            <Row title="NETFLIX ORIGINALS"
                fetchURL = {requests.fetchNetflixOriginals}
                isLargeRow />
            
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchTrending} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentries} />
        </div>
    )
}

export default HomeScreen