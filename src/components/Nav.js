import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Nav() {
    return(
        <nav className="navbar">
            <h1>Where in the World</h1>
            <div className="theme-toggler">
                <MdDarkMode className="icon" />
            </div>
        </nav>
    );
}