import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import Hero from "./home/Hero";
import TrendingActivities from "./home/TrendingActivities";
import WhatDoPeopleFeel from "./home/WhatDoPeopleFeel";

 
function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
     <TrendingActivities/>
      <WhatDoPeopleFeel/>
      <Footer/>
    </div>
  );
}

export default App;
