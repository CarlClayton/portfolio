import { useState, useEffect } from "react";
import {PortfolioList} from "..";
import { featured, web, mobile, design, branding, portfolioList } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    
    useEffect(() => {
            switch (selected) {
            case "featured":
                setData(featured);
                break;
            case "web":
                setData(web);
                break;
            case "mobile":
                setData(mobile);
                break;
            case "design":
                setData(design);
                break;
            case "branding":
                setData(branding);
                break;
            default:
                setData(featured);
            }
        }, [selected]);
    
    
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {portfolioList.map((item, key) => (
                    <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} key={key}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d, key) => (
                    <div className="item" key={key}>
                        <img src={d.img} alt={d.title}/>
                        <h3>{d.title}</h3>
                    </div>
                    ))}
            </div>
        </div>
    )
}
