import { useState } from "react";

export default function Works({data}) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d, key) => (
                    <div className="container" key={key}>
                    <div className="item">
                        <div className="left">
                            <div className="left-container">
                                <div className="img-container">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img 
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                alt="" 
                                />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="left" onClick={() =>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="right" onClick={() =>handleClick("right")}/>
        </div>
    )
}
