import "./App.css";
import Features from "./components/Features";
import { Header } from "./components/header";
import Hero from "./components/Hero";
import Present from "./components/Present";
import Train from "./components/Train";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Present />
      <Features />
      <Train />
    </>
  );
}

export default App;
