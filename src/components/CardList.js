import React from "react";
import Card from "./Card";
// import { robots } from "./Data/robots";
function CardList({ robots }) {
  const cardsArray = robots.map((user, i) => {
    return (
        // The key should be unique not change constantly
      <Card key={robots[i].id} id={ robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });

  return <div>{cardsArray}</div>;
}

export default CardList;
