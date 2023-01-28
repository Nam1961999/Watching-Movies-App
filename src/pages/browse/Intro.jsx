import React from 'react'
import ReactPlayer from 'react-player'
import style from "./Intro.css"

function Intro(props) {
    return (
        <div>
            <ReactPlayer
                playing={true}
                width="100%"
                height="580"
                volume={0}
                url="https://www.youtube.com/watch?v=-qQAhVIC2H0"
                className="video_demo"
                loop={true}
            />
            <div className='InfoIntro'>
                <p className='Intro_paragraph'>Description</p>
                <h1 className='Intro_heading'>Movie player App</h1>

            </div>
        </div>
    )

}
export default Intro;