import { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { ThemeContext } from "../ThemeContext";

function Detail() {
  const [data, setData] = useState();
  const { code } = useParams();
  const { push } = useHistory();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, [code]);

  return data !== undefined ? (
    <div className="detail">
      <button className={theme ? "dark" : "light"} onClick={() => push("/")}>
        <MdArrowBack />
        Go Back
      </button>
      <div className="detail-container">
        <img className="detail-img" src={data.flag} alt={`${data.name} flag`} />
        <div className="detail-body">
          <p className="detail-name">{data.name}</p>
          <div className="detail-info">
            <p>
              Native Name: <span>{data.nativeName}</span>
            </p>
            <p>
              Population: <span>{data.population}</span>
            </p>
            <p>
              Region: <span>{data.region}</span>
            </p>
            <p>
              Sub Region: <span>{data.subregion}</span>
            </p>
            <p>
              Capital: <span>{data.capital}</span>
            </p>
            <p>
              Topl Level Domain: <span>{data.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies: <span>{data.currencies[0].name}</span>
            </p>
            <p>
              Languages: <span>{data.languages[0].name}</span>
            </p>
          </div>
          <div className="detail-borders">
            Border Countries:
            {data.borders
              ? data.borders.map((item, index) => (
                  <Link
                    to={`/${item}`}
                    key={index}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    className={`borders ${theme ? "dark" : "light"}`}
                  >
                    <span>{item}</span>
                  </Link>
                ))
              : " -"}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Detail;
