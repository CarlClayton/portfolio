export default function Testimonials({data}) {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d, key) => (
                    <div key={key} className={`card ${d.featured ? "featured" : ''}`}>
                        <div className="top">
                            <img src="assets/right-arrow.png" alt="left" className="left" />
                            <img src={d.img} alt={d.name} className="user"/>
                            <img src={d.icon} alt="right" className="right"/>
                        </div>
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}
