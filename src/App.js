import { useState } from "react";
import "./styles.css";

export default function App() {
  const grid = new Array(10).fill(new Array(10).fill(0));
  const [coinPos, setCoinPos] = useState(1);
  const [diceValue, setDiceValue] = useState(6);

  const diceView = {
    1: "https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png",
    2: "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png",
    3: "https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png",
    4: "https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png",
    5: "https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png",
    6: "https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png",
  };

  const rollDice = () => {
    let rollValue = ((Math.random() * 1000000) % 6) + 1;
    rollValue = parseInt(String(rollValue), 10);
    setDiceValue(rollValue);
    setCoinPos(coinPos + rollValue < 101 ? coinPos + rollValue : coinPos);
    if (coinPos + rollValue > 100) {
      alert(`You need to roll ${100 - coinPos} or less to move ahead`);
    }
    if (coinPos + rollValue === 100) {
      setTimeout(() => {
        alert("Winner...!!!!!");
      }, 10);
    }
    if (coinPos === 100) {
      setCoinPos(0);
    }
  };

  return (
    <div className="App">
      <div className="table">
        {grid.map((row, rIdx) => {
          return (
            <div
              className={rIdx % 2 === 0 ? "row" : "row-reverse"}
              key={String(rIdx)}
            >
              {row.map((col, cIdx) => {
                return (
                  <div className="col" key={String(cIdx)}>
                    {rIdx * 10 + cIdx + 1 === coinPos ? (
                      rIdx * 10 + cIdx + 1 === 100 ? (
                        <img
                          alt="win"
                          src={
                            "https://cdn-icons-png.flaticon.com/512/2385/2385865.png"
                          }
                          width={50}
                        />
                      ) : (
                        <div className="coin" />
                      )
                    ) : (
                      rIdx * 10 + cIdx + 1
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="dice" onClick={rollDice}>
        <img alt="dice" src={diceView[diceValue]} width={50} />
      </div>
    </div>
  );
}
