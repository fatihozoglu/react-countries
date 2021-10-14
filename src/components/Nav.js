import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Nav() {
    let {theme, setTheme} = useContext(ThemeContext);

    return(
        <nav className={`navbar ${theme ? "dark" : "light"}`}>
            <h1>Countries</h1>
            <div onClick={() => setTheme(!theme)} className="theme-toggler">
                {
                    theme ? <MdLightMode className="icon" /> : <MdDarkMode className="icon" />
                }
            </div>
        </nav>
    );
}