import React from "react";
import CardsSection from "../components/HomePageSections/CardsSection";
import Carousel from "../components/Resuseable Components/Carousel";
import Footer from "../components/Resuseable Components/Footer";
import GreenSection from "../components/HomePageSections/GreenSection";
import MarketingSection from "../components/HomePageSections/MarketingSection";
import NavBar from "../components/Resuseable Components/NavBar";
import NewsSection from "../components/HomePageSections/NewsSection";
import PagesSection from "../components/HomePageSections/PagesSection";
import QualitiesSection from "../components/HomePageSections/QualitiesSection";
import WeirdSection from "../components/HomePageSections/WeirdSection";

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
