import { useState } from "react";
import "./App.css";
import ServiceSlider from "./components/E-Services/Slider";
import HeroSection from "./components/Hero/HeroSection";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/TopNav/Navbar";

function App() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const focusInput = () => {
    setIsInputFocused(true);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="hidden md:flex items-center justify-between pt-4 lg:px-2">
            <img
              src="/assets/images/logo.png"
              alt="fujairah-natural"
              className="w-60"
            />
            <img
              src="/assets/images/right-logo.png"
              alt="arrows-logo"
              className="w-20"
            />
          </div>
          <Navbar onSearchIconClick={focusInput} />
          <HeroSection isInputFocused={isInputFocused} />
          <Services />
          <hr className="mt-6" />
        </div>
      </div>
      <ServiceSlider />
    </>
  );
}

export default App;
