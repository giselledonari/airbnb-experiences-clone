import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

const cards = data.map((value) => {
  return (
    <Card 
    key={value.id}
    {...value} 
    />
  );

});

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}
