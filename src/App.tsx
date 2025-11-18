import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { Destinations } from "./components/Destinations";
import { TravelEssentials } from "./components/TravelEssentials";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="bg-neutral-50">
      <Navigation />
      <Hero />
      <AboutMe />
      <JourneyTimeline />
      <Destinations />
      <TravelEssentials />
      <Contact />
    </div>
  );
}