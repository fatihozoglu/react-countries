import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { ThemeContext } from "../ThemeContext";

function Detail() {
  const [data, setData] = useState();
  const { name } = useParams();
  const { push } = useHistory();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, [name]);

  return data !== undefined ? (
    <div className="detail">
      <button className={theme ? "dark" : "light"} onClick={() => push("/")}>
        <MdArrowBack />
        Go Back
      </button>
      <div className="detail-container">
        <img
          className="detail-img"
          src={data[0].flag}
          alt={`${data[0].name} flag`}
        />
        <div className="detail-body">
          <div className="detail-name">
            <p >{data[0].name}</p>
          </div>
          <div className="detail-info">
            <p>
              Native Name: <span>{data[0].nativeName}</span>
            </p>
            <p>
              Population: <span>{data[0].population}</span>
            </p>
            <p>
              Region: <span>{data[0].region}</span>
            </p>
            <p>
              Sub Region: <span>{data[0].subregion}</span>
            </p>
            <p>
              Capital: <span>{data[0].capital}</span>
            </p>
            <p>
              Topl Level Domain: <span>{data[0].topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies: <span>{data[0].currencies[0].name}</span>
            </p>
            <p>
              Languages: <span>{data[0].languages[0].name}</span>
            </p>
          </div>
          <div className="detail-borders">
            Border Countries:
            {data[0].borders
              ? data[0].borders.map((item, index) => (
                  <span
                    className={`borders ${theme ? "dark" : "light"}`}
                    key={index}
                  >
                    {item}
                  </span>
                ))
              : undefined}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Detail;
