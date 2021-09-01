import { MenuItem } from '../';

export default function Menu({data, menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {data.map((d, key) => 
                    <MenuItem key={key} title={d.title} link={d.link} handleOnClick={() => setMenuOpen(false)} />
                )}
            </ul>
        </div>
    )
}
