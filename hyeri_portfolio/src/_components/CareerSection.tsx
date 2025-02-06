import "../_style/carouselSection.css";

import Slider from "react-slick";
import ContentsBox from "./common/ContentsBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useState } from "react";
import ProjectOverview from "./common/ProjectOverview";

const CareerSection = () => {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);
  const [popupContent, setPopupContent] = useState<null | string>(null);
  const [openPopup, setOpenPopup] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleBoxClick = (title: string) => {
    setPopupContent(title);
    setOpenPopup(true);
  };

  const closePopup = useCallback(() => {
    setOpenPopup(false);
  }, []);

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

  const projectOverViewContents = [
    {
      projectName: "N-PIK",
      projectSummary:
        "N-PIK은 웹 브라우저에서 즉시 플레이할 수 있는 다양한 게임을 제공합니다. 이용자들은 암호화폐를 이용해 전 세계 유저들과 베팅을 하며 승패를 가리는 게임을 즐길 수 있습니다.",
      contribution: (
        <>
          <p>
            <span>실시간 게임 상태 반영 및 음향 동적 적용:</span> WebSocket을 통해 수신된 게임 상태 데이터를
            기반으로 배경 음악과 효과음을 실시간으로 동적으로 변경. 커스텀 Hook을 활용해 상태 변화에 따른
            효율적인 음향 처리를 구현.
          </p>
          <p>
            <span>부드러운 게임 타이머 UI 구현:</span> WebSocket으로 실시간 게임 상태를 구독하고,
            requestAnimationFrame과 CSS keyframe 애니메이션을 결합해 FPS 저하를 최소화하며 부드러운 타이머 UI
            제공.
          </p>
          <p>
            <span> 효율적인 상태 관리 및 렌더링 최적화:</span> WebSocket으로 수신된 캐릭터 스탯 데이터를
            Zustand로 관리하여 필요한 상태만 업데이트하고, Lodash의 debounce를 사용해 메시지 처리 빈도를
            조절해 불필요한 렌더링 최소화.
          </p>
          <p>
            <span> 캐릭터 이동 애니메이션 최적화: </span>기존 setTimeout 기반 DOM 업데이트 방식에서 CSS
            transform과 GPU 가속을 활용한 방식으로 변경, 렌더링 성능을 개선하고 부드러운 캐릭터 이동
            애니메이션 제공.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">TypeScript</p>
          <p className="techStack">Emotion</p>
          <p className="techStack">Zustand</p>
          <p className="techStack">React Hook Form</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            CSS stroke-dashoffset과 offset-path를 사용해 SVG 경로를 따라 캐릭터가 움직이는 애니메이션을
            만들었습니다. 경로 길이를 조정하거나 데이터를 변환하는 과정에서 어려움이 있었지만, 디자인과 개발
            간의 차이를 조율하며 기술적으로 성장할 수 있었습니다.
          </p>
          <p>
            React 프로젝트에서 성능 최적화를 위해 React.memo와 useMemo를 활용했습니다. React.memo로 부모
            리렌더링 시 props가 변하지 않은 자식 컴포넌트의 재렌더링을 방지했고, useMemo로 계산 비용이 큰
            작업을 메모이제이션해 필요한 경우에만 재계산되도록 했습니다. 이를 통해 각 도구를 상황에 맞게
            사용하는 방법의 중요성을 배웠습니다.
          </p>
        </>
      ),
      link: (
        <>
          <a
            href="https://velog.io/@jetom/css-stroke-dashoffset-view%EB%A1%9C-%EB%82%98%ED%83%80%EB%82%B4%EA%B8%B0%EA%B9%8C%EC%A7%80"
            target="_blank"
          >
            css stroke-dashoffset + view로 나타내기까지
          </a>
          <a
            href="https://velog.io/@jetom/No-5.-%EC%A7%80%EC%98%A5%EC%9D%98-%ED%81%AC%EB%A1%9C%EC%8A%A4%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95%EC%9D%84-%EA%B2%BD%ED%97%98%ED%95%B4%EB%B3%B4%EC%9E%90"
            target="_blank"
          >
            지옥의 크로스 브라우징을 경험해보자
          </a>
          <a
            href="https://velog.io/@jetom/No-16.%EA%B3%BC%EB%8F%84%ED%95%9C-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0"
            target="_blank"
          >
            과도한 리렌더링 개선하기
          </a>
        </>
      ),
    },
    {
      projectName: "PIK-Swap",
      projectSummary:
        "PIK-Swap은 Pik Coin을 예약 구매하여 할인된 가격으로 구입할 수 있는 사이트입니다. Pik Coin은 N-PIK 게임 플랫폼에서 사용되는 코인입니다.",
      contribution: (
        <>
          <p>
            <span>공통 컴포넌트 설계 및 구현:</span> 반복적으로 사용되는 UI 요소를 효율적으로 관리하기 위해
            공통 컴포넌트를 설계하고 구현. 다양한 액션(예약 구매, 상세 정보 보기)을 지원하며, 일관된 UI를
            유지해 사용자 경험(UX)을 개선.
          </p>
          <p>
            <span>Progress Bar 애니메이션 개발 및 성능 최적화:</span> 판매 진행 상황을 시각적으로 표현하기
            위해 Progress Bar 애니메이션을 추가. CSS transform과 transition을 활용해 성능을 최적화하고
            부드러운 애니메이션 효과를 구현.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">TypeScript</p>
          <p className="techStack">Emotion</p>
          <p className="techStack">Zustand</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            반복적으로 사용되는 UI 요소를 공통 컴포넌트로 설계해 재사용성을 높이고, 다양한 액션을 지원하며
            일관된 UI를 유지했습니다. 이를 통해 개발 속도와 사용자 경험을 동시에 개선할 수 있었습니다.
          </p>
          <p>
            판매 진행 상황을 시각적으로 표현하기 위해 Progress Bar 애니메이션을 구현하고, CSS transform과
            transition을 활용해 성능을 최적화했습니다. 초기 끊김 문제를 해결하며 부드러운 사용자 경험을
            제공했습니다.
          </p>
        </>
      ),
      link: <></>,
    },
    {
      projectName: "ad-service",
      projectSummary:
        "구매자의 상품 정보를 수집하여 데이터베이스에 보관하고, 검색 순위 개선을 위해 자동 검색 절차를 활용하는 B2B 서비스입니다.",
      contribution: (
        <>
          <p>
            <span>사용자 입력 검증 로직 체계화:</span> Zod 라이브러리를 활용해 로그인, 회원가입, 비밀번호 변경
            페이지의 입력 검증 스키마를 작성하고, 이를 기반으로 사용자 입력 값을 체계적으로 검증.
          </p>
          <p>
            <span>공통 알림 팝업 컴포넌트 구현:</span> Zustand를 활용해 알림 팝업을 전역 상태로 관리하도록
            개선하고, 개별 페이지에서 관리하던 코드를 통합해 중복을 줄이며 일관된 사용자 경험을 제공.
          </p>
          <p>
            <span>서버 응답 메시지 관리 최적화:</span> 서버 응답 메시지를 상수 파일로 분리하여 객체 형태로
            관리. 중복 텍스트를 통합적으로 관리하며 유지보수성을 향상시키고 오류 발생 가능성을 최소화.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">TypeScript</p>
          <p className="techStack">Emotion</p>
          <p className="techStack">Zustand</p>
          <p className="techStack">Zod</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            Zod 라이브러리를 활용해 입력 검증 스키마를 작성하면서, 각 페이지에서 일관된 검증 로직을 적용할 수
            있었습니다. 이를 통해 코드의 가독성과 재사용성을 높이고, 사용자 입력 처리의 신뢰성을 강화할 수
            있었습니다.
          </p>
          <p>
            Zustand를 활용해 알림 팝업을 전역 상태로 관리하도록 개선하면서 코드 중복을 줄이고 사용자 경험의
            일관성을 확보했습니다. 이 작업을 통해 유지보수성이 크게 향상되었습니다.
          </p>
          <p>
            서버 응답 메시지를 상수 파일로 분리하여 객체 형태로 관리하면서 중복된 텍스트를 한 곳에서
            통합적으로 관리할 수 있었습니다. 이를 통해 코드 변경 시 수정 범위를 최소화하고, 오류 발생 가능성을
            줄일 수 있었습니다.
          </p>
        </>
      ),
      link: <></>,
    },
    {
      projectName: "위시드보험중개",
      projectSummary: "재보험 거래를 위한 정보를 제공하는 사이트입니다.",
      contribution: (
        <>
          <p>
            초기 기획부터 반응형 퍼블리싱까지 진행하며, 페이지 레이아웃과 인터랙션 디자인을 최적화해 사용자
            경험을 개선. 다양한 디바이스 환경에서 일관된 접근성을 제공.
          </p>
          <p>
            기존 코드의 중복된 부분을 제거하고, 재사용 가능한 컴포넌트를 설계하여 코드베이스를 단순화.
            유지보수성을 높이고 새로운 기능 추가를 용이하게 구현.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">TypeScript</p>
          <p className="techStack">Tailwind CSS</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            초기 기획부터 퍼블리싱까지 전 과정을 담당하며 사용자와 디바이스 환경을 고려한 설계를 경험할 수
            있었습니다. 특히, 반응형 디자인을 통해 다양한 사용자 환경에서 일관된 경험을 제공한 점이 의미
            있었습니다.
          </p>
          <p>
            기존 코드의 중복 제거와 컴포넌트화를 통해 유지보수성과 확장성을 크게 향상시켰습니다. 이 과정에서
            재사용 가능한 코드 설계의 중요성을 다시 한번 깨달았으며, 협업 시 코드 품질이 팀 생산성에 미치는
            영향을 체감할 수 있었습니다.
          </p>
        </>
      ),
      link: <></>,
    },
    {
      projectName: "한솔루션(주)",
      projectSummary: "홈페이지 제작 및 리뉴얼 서비스를 제공하는 사이트입니다.",
      contribution: (
        <>
          <p>
            웹 기획과 디자인 설계를 주도하며, 다양한 디바이스 환경에서도 최적의 사용자 경험을 제공하기 위해
            반응형 웹 개발을 수행.
          </p>
          <p>애니메이션과 사용자 인터랙션 중심의 UI를 구현하여 더욱 인터랙티브한 사용자 경험을 제공.</p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">HTML5</p>
          <p className="techStack">CSS3</p>
          <p className="techStack">JavaScript</p>
          <p className="techStack">jQuery</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            다양한 디바이스 환경을 고려한 반응형 웹 개발을 통해 사용자 접근성을 개선할 수 있었습니다. 기획과
            설계를 주도하며 사용자 중심의 사고방식을 강화할 수 있는 좋은 경험이었습니다.
          </p>
          <p>
            애니메이션과 인터랙션 구현 과정에서 사용자 경험에 긍정적인 영향을 미칠 수 있는 디테일의 중요성을
            배웠습니다. 특히, UI 요소가 단순히 시각적인 효과를 넘어 사용성과 연결될 때 더 큰 가치를 제공한다는
            점을 깨달았습니다.
          </p>
        </>
      ),
      link: <></>,
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

  const filteredProjectContent = projectOverViewContents.filter(
    (project) => project.projectName === popupContent
  )[0];

  return (
    <section className={openPopup ? "backgroundBlur" : "carouselWrapper"} aria-label="경력 소개 섹션">
      {openPopup && (
        <ProjectOverview
          key={filteredProjectContent.projectName}
          projectName={filteredProjectContent.projectName}
          projectSummary={filteredProjectContent.projectSummary}
          contribution={filteredProjectContent.contribution}
          retrospect={filteredProjectContent.retrospect}
          techStack={filteredProjectContent.techStack}
          link={filteredProjectContent.link}
          onClose={closePopup}
        />
      )}
      <h2 className="carouselProjectName">Career</h2>
      <Slider {...sliderSettings}>
        <article className="carouselContainer">
          <header className="workExperience">
            <p className="companyName">엔포트버스</p>
            <time dateTime="2022-08">2022.08</time> - <time dateTime="2024-05">2024.05</time>
          </header>
          <p className="contentDescription">
            WebSocket 실시간 통신과 GPU 가속 애니메이션으로 게임 성능을 <br />
            최적화하고, 동적 사운드 시스템과 Progress Bar 구현으로 몰입도 높은 UI/UX를 제공하여 <br />웹 게임
            플랫폼의 사용자 경험을 향상시켰습니다.
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
                  onClick={() => {
                    handleBoxClick(item.title);
                  }}
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
            회사 홈페이지의 디자인과 UI/UX 개선 작업을 맡아 초기 기획부터 반응형 퍼블리싱까지 진행하며, <br />
            페이지 레이아웃과 인터랙션 디자인을 최적화해 사용자 경험을 개선했습니다.
          </p>
          <div className="carouselContents">
            <ContentsBox
              title="위시드보험중개"
              content="재보험 거래를 위한 정보를 제공하는 사이트입니다."
              hover={hoverIndex === 4}
              onMouseEnter={() => {
                setHoverIndex(4);
              }}
              onMouseLeave={() => {
                setHoverIndex(null);
              }}
              onClick={() => {
                handleBoxClick("위시드보험중개");
              }}
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
              hover={hoverIndex === 5}
              onMouseEnter={() => {
                setHoverIndex(5);
              }}
              onMouseLeave={() => {
                setHoverIndex(null);
              }}
              onClick={() => {
                handleBoxClick("한솔루션(주)");
              }}
            />
          </div>
        </article>
      </Slider>
    </section>
  );
};

export default CareerSection;
