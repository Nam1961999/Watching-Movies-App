import React, { useState } from "react";

import style from "./Banner.css";

function Banner(props) {

  const [data, setData] = useState("")

  React.useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&fbclid=IwAR1ybBFKjNcZx-09iup5niXCN1PvVdtLrJ5O7Ae2oYpHYyfzOe0MaHJAtRk&language=en-US')
      .then(results => results.json())
      .then(res => {
        console.log(res)
        const data = res.results[Math.floor(Math.random() * 20) - 1];
        setData(data)
      });
  }, []);
  console.log(data.backdrop_path)

  //
  return (
    <div className="banner" style={{
      backgroundImage: `url( "http://image.tmdb.org/t/p/original/` + data.backdrop_path, overflow: 'hidden', height: "auto", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"
    }}>
      <div className="DescriptionBanner"><h1>{data.original_title ? data.original_title: data.name }</h1>
      <div >
        <button className = "button__banner">Play</button>
        <button className = "button__banner">My List</button>
      <p>{data.overview}}</p>
      </div></div>
      
          </div>
  )
}
export default Banner
