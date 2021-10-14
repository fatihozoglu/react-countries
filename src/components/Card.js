import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"

export default function Card(props) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`card ${theme ? "dark" : "light shadow"}`}>
            <img className="flag-img" src={props.data.flag} alt="country flag" />
            <div className="country-info">
                <p className="country-name">{props.data.name}</p>
                <p>Population: <span>{props.data.population}</span> </p>
                <p>Region: <span>{props.data.region}</span></p>
                <p>Capital: <span>{props.data.capital}</span></p>
            </div>
            
        </div>
    );
}