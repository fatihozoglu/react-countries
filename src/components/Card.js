

export default function Card(props) {
    return (
        <div className="card">
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