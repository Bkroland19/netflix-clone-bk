import React from "react";
import Nav from "./Nav";
import "./HomeScreen.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";

function Homescreen() {
  return (
    <div className="homeScreen">
      {/**Nav */}
      <Nav />

      {/**Banner */}

      <Banner />

      {/**row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Animations" fetchUrl={requests.fetchAnimation} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="TV" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default Homescreen;
