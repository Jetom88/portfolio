import "./_style/common.css";

import Navigation from "./_components/common/Navigation";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import CareerSection from "./_components/CareerSection";
import SideProjectSection from "./_components/SideProjectSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const App = () => {
  const [navColor, setNavColor] = useState("white");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const firstIntersecting = entries.find((entry) => entry.isIntersecting);
        if (firstIntersecting) {
          const bg = window.getComputedStyle(firstIntersecting.target).backgroundColor;
          const newNavColor = bg === "rgb(255, 255, 255)" ? "black" : "white";
          if (newNavColor !== navColor) {
            setNavColor(newNavColor);
          }
        }
      },
      { threshold: 0.8 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navColor]);

  return (
    <>
      <Navigation navColor={navColor} />

      <FirstSection />
      <SecondSection />
      <CareerSection />
      <SideProjectSection />
    </>
  );
};

export default App;
