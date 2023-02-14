import React from "react";
import CardsSection from "../components/CardsSection";
import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <CardsSection />
    </>
  );
};
