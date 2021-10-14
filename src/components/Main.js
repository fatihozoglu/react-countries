import { useState, useEffect } from "react";
import Card from "./Card";

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(data);

  let cards =
    data !== undefined ? (
      data.map((item) => <Card key={item.numericCode} data={item} />)
    ) : (
      <div>Loading</div>
    );

  return <main className="main">{cards}</main>;
}
