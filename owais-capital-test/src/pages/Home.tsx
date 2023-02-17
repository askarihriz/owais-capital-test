import React from "react";
import CardsSection from "../components/CardsSection";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import GreenSection from "../components/GreenSection";
import MarketingSection from "../components/MarketingSection";
import NavBar from "../components/NavBar";
import NewsSection from "../components/NewsSection";
import PagesSection from "../components/PagesSection";
import QualitiesSection from "../components/QualitiesSection";
import WeirdSection from "../components/WeirdSection";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <CardsSection />
      <GreenSection />
      <QualitiesSection />
      <PagesSection />
      <NewsSection />
      <MarketingSection />
      <WeirdSection />
      <Footer />
    </>
  );
};
