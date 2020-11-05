import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

import "./helpers/fontawesome";
import { sneakers } from "./helpers/data";

function App() {
  const [dressShoes, setDressShoes] = React.useState(0);
  const [dressFeet, setDressFeet] = React.useState("");
  const [sneakersName, setSneakerName] = React.useState("");

  React.useEffect(() => {
    const dressFeetUrl = `/images/${sneakers[dressShoes].tag}.svg`;
    setDressFeet(process.env.PUBLIC_URL + dressFeetUrl);
    setSneakerName(sneakers[dressShoes].name);
  }, [dressShoes]);

  function nextSneakers() {
    sneakers.forEach((curr, index) => {
      if (index === dressShoes) {
        index > sneakers.length - 2
          ? setDressShoes(0)
          : setDressShoes(index + 1);
      }
    });
  }

  function prevSneakers() {
    sneakers.forEach((curr, index) => {
      if (index === dressShoes) {
        console.log(index);
        index < 1
          ? setDressShoes(sneakers.length - 1)
          : setDressShoes(index - 1);
      }
    });
  }

  return (
    <div className="App">
      <section className="sneakers-feature">
        <div className="sneakers-feature--base">
          <button
            onClick={prevSneakers}
            className="primary-btn sneakers-feature--btn"
          >
            <FontAwesomeIcon icon="chevron-left" size="4x" />
          </button>
          <img
            src={process.env.PUBLIC_URL + "/images/leg.svg"}
            alt="Leg with sock"
            className="sneakers-feature--leg"
          />
          <button
            onClick={nextSneakers}
            className="primary-btn sneakers-feature--btn"
          >
            <FontAwesomeIcon icon="chevron-right" size="4x" />
          </button>
        </div>

        <img
          src={dressFeet}
          alt="Dress My Feet"
          className="sneakers-feature--dress-my-feet"
        />
        <h2 className="sneakers-feature--name">{sneakersName}</h2>
      </section>

      <nav className="sneakers-gallery">
        <div className="sneakers-gallery--card-group">
          {sneakers.map((sneaks) => {
            const imgUrl = `/images/${sneaks.tag}.svg`;
            return (
              <div className="sneakers-card" key={sneaks.tag}>
                <button
                  onClick={() => setDressShoes(sneakers.indexOf(sneaks))}
                  className="sneakers-card--button"
                >
                  <img
                    src={process.env.PUBLIC_URL + imgUrl}
                    alt={sneaks.name}
                    className="sneakers-card--image"
                  />
                  <h2 className="sneakers-card--name">{sneaks.name}</h2>
                </button>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
