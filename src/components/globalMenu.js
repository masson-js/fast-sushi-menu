import { useEffect, useState } from "react";
import Sushi from "./sushi";
import SetsSection from "./sets";
import PhiladelphiaSection from "./philadelphiaS";
import CaliforniaSection from "./california";

import sushiArray from "../data/sushi.json";
import setsArray from "../data/sets.json";
import philadelphiaArray from "../data/philadelphia.json";
import californiaArray from "../data/california.json";

export default function GlobalMenu() {
  const [sushiClicked, setSushiClicked] = useState(false);
  const [setsClicked, setSetsClicked] = useState(false);
  const [PhiladelphiaClicked, setPhiladelphiaClicked] = useState(false);
  const [CaliforniaClicked, setCaliforniaClicked] = useState(false);

  const [sushiList, setSushiList] = useState({});
  const [setsList, setSetsList] = useState({});
  const [philadelphiaList, setPhiladelphiaList] = useState({});
  const [californiaList, setCaliforniaList] = useState({});

  useEffect(() => {
    const california = JSON.parse(JSON.stringify(californiaArray));
    setCaliforniaList(california);

    const philadelphia = JSON.parse(JSON.stringify(philadelphiaArray));
    setPhiladelphiaList(philadelphia);
    
    const sushi = JSON.parse(JSON.stringify(sushiArray));
    setSushiList(sushi);

    const sets = JSON.parse(JSON.stringify(setsArray));
    setSetsList(sets);
  }, []);

  return (
    <>
      <div className="menu">
        <button
          className="menu-button sushiButton"
          onClick={() => setSushiClicked(!sushiClicked)}
        >
          Sushi
        </button>
        <div>{sushiClicked && <Sushi sushiList={sushiList} />}</div>

        <button
          className="menu-button setsButton"
          onClick={() => setSetsClicked(!setsClicked)}
        >
          Sets
        </button>
        <div>{setsClicked && <SetsSection setsList={setsList} />}</div>
        <button
          className="menu-button philadelphiaButton"
          onClick={() => setPhiladelphiaClicked(!PhiladelphiaClicked)}
        >
          Philadelphia
        </button>
        <div>
          {PhiladelphiaClicked && (
            <PhiladelphiaSection philadelphiaList={philadelphiaList} />
          )}
        </div>
        <button
          className="menu-button californiaButton"
          onClick={() => setCaliforniaClicked(!CaliforniaClicked)}
        >
          California
        </button>
        <div>
          {CaliforniaClicked && (
            <CaliforniaSection californiaList={californiaList} />
          )}
        </div>
      </div>
    </>
  );
}
