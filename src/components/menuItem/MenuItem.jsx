export default function MenuItem({link, title, handleOnClick}) {
    return (
        <li className="menu-item" onClick={handleOnClick}>
            <a href={link}>{title}</a>
        </li>
    )
}
