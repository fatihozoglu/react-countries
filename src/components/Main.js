import { useState, useEffect } from "react";
import Card from "./Card";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Main() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  const {theme} = useContext(ThemeContext);

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
        .filter(item => {
          if(input === "") return item;
          return item.name.toLowerCase().includes(input.toLowerCase());
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

  let optionItems = options.map((item, index) => {
    return <option key={index} value={item}>{item}</option>;
  });

  return (
    <main className="main">
      <div className="input-container">
        <input
          className={theme ? undefined : "shadow"}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search For a Country"
        />
        <select
          onChange={(e) => setFilter(e.target.value)}
          className={`filter ${theme ? undefined : "shadow"}`}
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
