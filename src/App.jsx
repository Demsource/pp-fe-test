import "./App.css";
import TopSection from "./components/TopSection";
import GamingDestinationSection from "./components/GamingDestinationSection";
import WhyUsSection from "./components/WhyUsSection";
import StartJourney from "./components/StartJourney";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopSection />
      <GamingDestinationSection />
      <WhyUsSection />
      <StartJourney />
      <Footer />
    </div>
  );
}

export default App;
