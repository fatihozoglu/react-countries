import { useState, useEffect } from "react";
import Card from "./Card";

export default function Main() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState("all");

  console.log(filter);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);

  let cards =
    data !== undefined ? (
      data
        .filter((item) => {
          if (filter === "all") return item;
          return item.region === filter;
        })
        .map((item) => <Card key={item.numericCode} data={item} />)
    ) : (
      <div>Loading</div>
    );

  let options = [];
  data !== undefined &&
    data.forEach((item) => {
      if (!options.includes(item.region)) {
        options.push(item.region);
      }
    });

  let optionItems = options.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <main className="main">
      <div className="input-container">
        <input type="text" placeholder="Search For a Country" />
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="filter"
          name="regions"
        >
          <option value="all">Filter By Region</option>
          {optionItems}
        </select>
      </div>
      <div className="cards-container">{cards}</div>
    </main>
  );
}
