import "./_style/common.css";

import Navigation from "./_components/common/Navigation";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import CarouselSection from "./_components/CarouselSection";

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navigation />
      <FirstSection />
      <SecondSection />
      <CarouselSection />
    </div>
  );
};

export default App;
