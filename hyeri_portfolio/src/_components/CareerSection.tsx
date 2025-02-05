import "../_style/carouselSection.css";

import Slider from "react-slick";
import ContentsBox from "./common/ContentsBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ProjectOverview from "./common/ProjectOverview";

const CareerSection = () => {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const contents = [
    {
      title: "N-PIK",
      content: "웹 브라우저에서 즉시 플레이할 수 있는 다양한 게임을 제공하는 사이트입니다.",
    },
    {
      title: "PIK-Swap",
      content: "PIK-Swap은 Pik Coin을 예약 구매하여 할인된 가격으로 구입할 수 있는 사이트입니다.",
    },
    {
      title: "ad-service",
      content:
        "구매자의 상품 정보를 수집하여 데이터베이스에 보관하고, 검색 순위 개선을 위해 자동 검색 절차를 활용하는 B2B 서비스입니다.",
    },
  ];

  const sliderSettings = {
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true, // 접근성 활성화
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
    <>
      <ProjectOverview />
      <section className="carouselWrapper" aria-label="경력 소개 섹션">
        <h2>Career</h2>
        <Slider {...sliderSettings}>
          <article className="carouselContainer">
            <header className="workExperience">
              <p className="companyName">엔포트버스</p>
              <time dateTime="2022-08">2022.08</time> - <time dateTime="2024-05">2024.05</time>
            </header>
            <p className="contentDescription">
              WebSocket 실시간 통신과 GPU 가속 애니메이션으로 게임 성능을 <br />
              최적화하고, 동적 사운드 시스템과 Progress Bar 구현으로 몰입도 높은 UI/UX를 제공하여 <br />웹
              게임 플랫폼의 사용자 경험을 향상시켰습니다.
            </p>
            <div className="carouselContents">
              {contents.map((item, index) => {
                return (
                  <ContentsBox
                    title={item.title}
                    content={item.content}
                    hover={hoverIndex === index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          </article>

          <article className="carouselContainer">
            <header className="workExperience">
              <p className="companyName">위시드보험중개</p>
              <time dateTime="2021-12">2021.12</time> - <time dateTime="2022-02">2022.02</time>
            </header>
            <p className="contentDescription">
              회사 홈페이지의 디자인과 UI/UX 개선 작업을 맡아 초기 기획부터 반응형 퍼블리싱까지 진행하며,{" "}
              <br />
              페이지 레이아웃과 인터랙션 디자인을 최적화해 사용자 경험을 개선했습니다.
            </p>
            <div className="carouselContents">
              <ContentsBox
                title="위시드보험중개"
                content="재보험 거래를 위한 정보를 제공하는 사이트입니다."
              />
            </div>
          </article>

          <article className="carouselContainer">
            <header className="workExperience">
              <p className="companyName">한솔루션(주)</p>
              <time dateTime="2020-10">2020.10</time> - <time dateTime="2021-07">2021.07</time>
            </header>
            <p className="contentDescription">
              웹 기획과 디자인 설계를 주도하며 다양한 디바이스 환경에서도
              <br /> 최적의 사용자 경험을 제공하기 위해 반응형 웹 개발을 수행했습니다.
            </p>
            <div className="carouselContents">
              <ContentsBox
                title="한솔루션(주)"
                content="홈페이지 제작 및 리뉴얼 서비스를 제공하는 사이트입니다."
              />
            </div>
          </article>
        </Slider>
      </section>
    </>
  );
};

export default CareerSection;
