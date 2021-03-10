import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Navbar from "./Navbar.js";
import Rows from "./Rows.js";
import requests from "./requests";
function Home() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Rows title="Horror Movies" fetchURL={requests.fetchHorroMovies} />
      <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
