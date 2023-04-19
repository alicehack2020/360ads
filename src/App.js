import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import Hero from "./home/Hero";
import PopularFlights from "./home/PopularFlights";
import TrendingActivities from "./home/TrendingActivities";
import WhatDoPeopleFeel from "./home/WhatDoPeopleFeel";
import BestFlight from "./home/BestFlight";

 
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
     
      <PopularFlights />
      <BestFlight/>
     <TrendingActivities/>
      <WhatDoPeopleFeel/>
      <Footer/>
    </div>
  );
}

export default App;
