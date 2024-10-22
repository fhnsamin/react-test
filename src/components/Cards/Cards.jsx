import { useState } from "react";
import "./Cards.css";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <div className="mx-auto w-11/12 max-w-screen-xl space-y-4">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
