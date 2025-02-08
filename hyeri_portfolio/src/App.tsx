import "./_style/common.css";

import Navigation from "./_components/common/Navigation";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import CareerSection from "./_components/CareerSection";
import SideProjectSection from "./_components/SideProjectSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <Helmet>
          <title>프론트엔드 신혜리 포트폴리오</title>
          <meta name="keywords" content="프론트엔드, 포트폴리오, 신혜리" />
          <meta name="description" content="프론트엔드 신혜리의 포트폴리오입니다." />
          <meta property="og:title" content="프론트엔드 신혜리 포트폴리오" />
          <meta property="og:description" content="프론트엔드 신혜리의 포트폴리오입니다." />
          <meta property="og:image" content="https://hyeri-portfolio.vercel.app/assets/opengraph.jpg" />
          <meta property="og:url" content="https://hyeri-portfolio.vercel.app/" />
          <link
            rel="icon"
            type="image/png"
            href="https://hyeri-portfolio.vercel.app/assets/16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://hyeri-portfolio.vercel.app/assets/32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://hyeri-portfolio.vercel.app/assets/48x48.png"
            sizes="48x48"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://hyeri-portfolio.vercel.app/assets/180x180.png"
          />
        </Helmet>
      </HelmetProvider>
      <Navigation navColor={navColor} />

      <FirstSection />
      <SecondSection />
      <CareerSection />
      <SideProjectSection />
    </>
  );
};

export default App;
