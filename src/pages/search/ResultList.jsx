import React, { useState, useEffect, useRef } from 'react';
import style from './ResultList.css';
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube';

const previewOpts = {
    height: '440',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
};

function ResultList(props) {
    const [list, setList] = useState([]);
    const [showingMovie, setShowingMovie] = useState(null);
    const [previewMovieId, setPreviewMovieId] = useState("");
    var myRef = useRef();

    const getFilms = async function () {
        let apiURL = props.endpoint;

        var data = await fetch(apiURL).then(res => res.json())

        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            let a = "https://image.tmdb.org/t/p/w500" + data.results[i].backdrop_path
            data.results[i].url = a;
            if (!data.results[i].title) data.results[i].title = data.results[i].name;
            if (!data.results[i].release_date) data.results[i].release_date = data.results[i].first_air_date;

        }
        // console.log(links);
        setList(data.results);
    }
    useEffect(() => {
        getFilms();
    }, [props.endpoint]);

    useEffect(() => {
        
    }, []);


    const getPreivewYTBIdByMovieId = async function () {
        let apiURL = `https://api.themoviedb.org/3/movie/${showingMovie.id}/videos?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82`;

        var data = await fetch(apiURL).then(res => res.json())

        var temp = "";
        if (data.results) {
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].site == "YouTube") {
                    temp = data.results[i].key;
                }
            }

        }

        // console.log(links);
        setPreviewMovieId(temp);
    }

    useEffect(() => {
        if (showingMovie) {
            getPreivewYTBIdByMovieId();
            window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop });
        }
    }, [showingMovie]);

    const showInfo = function (movie) {

        if (!showingMovie || showingMovie.id != movie.id) {
            setShowingMovie(movie);
        } else {
            setShowingMovie(null);
        }
    };

    var moviePreview = "";

    if (showingMovie) {
        console.log(moviePreview)
        moviePreview = <div style={{ display: "flex", paddingLeft: "12px", paddingRight: "12px" }}>

            <div ref={myRef} style={{ width: "50%" }}>
                <h1>{showingMovie.title}</h1>
                <hr />
                <p>Release Date: {new Date(showingMovie.release_date).toLocaleDateString()}</p>
                <p> Vote: {showingMovie.vote_average}/10</p>
                <p>{showingMovie.overview}</p>
            </div>
            <div style={{ width: "48%", marginLeft: "auto", "marginTop": "20px" }}>
                {<YouTube videoId={previewMovieId} opts={previewOpts} />}
            </div>


        </div>
    }

    return (
        <div className = "ResultContainer">
            <h1>Search Result</h1>
            <div className='movie-container'>
        <h1>{props.title}</h1>
        {moviePreview}
        <div className='seachRow_item row text-center'>
          
            {list.map((movie, index) => (
                <div key={index} className="searchFilmItem" onClick={() => { showInfo(movie); }}>
                    <img src={movie.url} className="searchImg_banner"></img>
                    <p className='searchDescriptionFilm'>{movie.title}</p>
                </div>))}
        </div>

    </div></div>
        
    );
}

export default ResultList;
