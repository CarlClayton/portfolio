import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Man", "Myth", "Legend"]
        })
    }, [])
    
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="man"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Carl Clayton</h1>
                    <h3>The <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down"/>
                </a>
            </div>
        </div>
    )
}
