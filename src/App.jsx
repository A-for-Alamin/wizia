import "./App.css";
import Features from "./components/Features";
import { Header } from "./components/header";
import Hero from "./components/Hero";
import Improve from "./components/Improve";
import Present from "./components/Present";
import Slider from "./components/Slider";
import Stared from "./components/stared";
import Train from "./components/Train";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Present />
      <Features />
      <Train />
      <Slider />
      <Improve />
      <Stared />
    </>
  );
}

export default App;
