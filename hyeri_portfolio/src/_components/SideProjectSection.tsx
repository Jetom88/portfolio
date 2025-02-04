import "../_style/carouselSection.css";

import Slider from "react-slick";
import ContentsBox from "./common/ContentsBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SideProjectSection = () => {
  const sliderSettings = {
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true, // 접근성 활성화
    infinite: false,
    nextArrow: (
      <button aria-label="다음 슬라이드">
        <img src="/assets/next.png" />
      </button>
    ),
    prevArrow: (
      <button aria-label="이전 슬라이드">
        <img src="/assets/prev.png" />
      </button>
    ),
  };

  return (
    <section className="carouselWrapper" aria-label="사이드프로젝트  소개 섹션">
      <h2>Side Project</h2>
      <Slider {...sliderSettings}>
        <article className="carouselContainer">
          <header className="workExperience">
            <p className="companyName">사이드 프로젝트</p>
            <time dateTime="2022-08">2022 ~ ing</time>
          </header>
          <p className="contentDescription">
            2022년부터 프론트엔드 개발자로서 사이드 프로젝트를 통해
            <br /> 꾸준히 성장해왔습니다. 새로운 기술과 도구를 탐구하며 사용자 경험을 향상시키는 데 집중하고
            있으며, <br />
            실무에 적용 가능한 결과물을 만들어가는 과정에서 많은 성취와 배움을 얻고 있습니다.
          </p>
          <div className="carouselContents">
            <ContentsBox
              title="Eungeori"
              content="사용자의 배변 활동을 기록하고 관리할 수 있는 사이트입니다."
            />
            <ContentsBox
              title="Mentoridge"
              content="멘티가 배우고 싶은 분야를 학습하고, 멘토가 지식을 공유하며 수익을 창출할 수 있는 멘토링 플랫폼입니다."
            />
            <ContentsBox
              title="Starving"
              content="레시피 공유 사이트 해먹남녀를 클론한 프로젝트. 사용자가 레시피를 검색하고 공유할 수 있는 기능을 제공하는 서비스입니다."
            />
          </div>
        </article>
      </Slider>
    </section>
  );
};

export default SideProjectSection;
