
export default function PortfolioList({title, id, active, setSelected}) {
    return (
        <li className={`portfolio-list ${active ? " active" : ""}`} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
