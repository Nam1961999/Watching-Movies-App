import React, { useState, useEffect } from 'react';

import style from './Browse.css';
import Intro from "./Intro";
import MovieList from "./MovieList"
import Navbar from './Navbar';
import Banner from './Banner';

function Browse(props) {
	return (
		<div>
			{/* <Navbar /> */}
			<Banner />
			{/* <Intro /> */}
			<div className='body__Film'>
				<MovieList title="Original" endpoint="https://api.themoviedb.org/3/discover/tv?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&with_network=123" />
				<MovieList title="Trending" endpoint="https://api.themoviedb.org/3/trending/all/week?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&language=en-US" />
				<MovieList title="TopRate" endpoint="https://api.themoviedb.org/3/movie/top_rated?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&language=en-US" />
				<MovieList title="Action" endpoint="https://api.themoviedb.org/3/discover/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&with_genres=28" />
				<MovieList title="Comedy" endpoint="https://api.themoviedb.org/3/discover/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&with_genres=35" />
				<MovieList title="Horror" endpoint="https://api.themoviedb.org/3/discover/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&with_genres=27" />
				<MovieList title="Romance" endpoint="https://api.themoviedb.org/3/discover/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&with_genres=10749" />
				<MovieList title="Documentaries" endpoint="https://api.themoviedb.org/3/discover/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&with_genres=99" />
			</div>
		</div>
	);
}

export default Browse;
