import React from "react";
import Card from "./Card";
import data from "./Data";

const Home = () => {
  return (
    <div className="home-container">
      {data.map((item, index) => {
        return (
          <Card
            img={item.img}
            title={item.title}
            desc={item.desc}
            genre={item.genre}
            cast={item.cast}
            price={item.price}
            item={item}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Home;
