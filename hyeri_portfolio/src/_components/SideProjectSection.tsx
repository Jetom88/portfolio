import "../_style/carouselSection.css";

import Slider from "react-slick";
import ContentsBox from "./common/ContentsBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useState } from "react";
import ProjectOverview from "./common/ProjectOverview";

const SideProjectSection = () => {
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
      title: "Eungeori",
      content: "사용자의 배변 활동을 기록하고 관리할 수 있는 사이트입니다.",
    },
    {
      title: "Mentoridge",
      content:
        "멘티가 배우고 싶은 분야를 학습하고, 멘토가 지식을 공유하며 수익을 창출할 수 있는 멘토링 플랫폼입니다.",
    },
    {
      title: "Starving",
      content:
        "레시피 공유 사이트 해먹남녀를 클론한 프로젝트. 사용자가 레시피를 검색하고 공유할 수 있는 기능을 제공하는 서비스입니다.",
    },
  ];

  const projectOverViewContents = [
    {
      projectName: "Eungeori",
      projectSummary: "사용자의 배변 활동을 기록하고 관리할 수 있는 사이트입니다.",
      contribution: (
        <>
          <p>
            <span>배변 활동 기록 및 패턴 분석 기능 구현:</span>
            배변 시간을 기록하고 상태를 체크하며, 메모 기능을 통해 건강 기록을 가능하게 구현. 주간 및 월간
            배변 패턴을 시각화하여 사용자 건강 관리에 도움을 제공.
          </p>
          <p>
            <span>Zustand를 활용한 상태 관리:</span>
            Zustand를 활용해 전역 상태 관리 로직을 구현. 컴포넌트 간 상태 공유를 용이하게 하고, 코드 복잡도를
            줄이며 개발 생산성을 향상.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">TypeScript</p>
          <p className="techStack">vanilla-extract</p>
          <p className="techStack">Zustand</p>
          <p className="techStack">React Hook Form</p>
          <p className="techStack">Zod</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            사용자 건강에 직접적인 영향을 미치는 데이터를 다루는 과정에서 UX/UI의 중요성을 다시 한번
            느꼈습니다. 특히, 데이터를 시각화하여 사용자에게 의미 있는 정보를 제공하는 데 초점을 맞춘 점이
            의미 있었습니다.
          </p>
          <p>
            vanilla-extract를 처음 사용하면서 styled-components와 비교해 CSS-in-TypeScript의 타입 안전성과
            빌드 타임 스타일 생성의 이점을 체감할 수 있었습니다. 특히, CSS 변수를 활용한 디자인 시스템 구축이
            더욱 직관적이고 효율적이었습니다. 반면, styled-components는 동적 스타일링과 props 기반 스타일
            정의가 더 유연하게 느껴졌으며, 러닝 커브가 낮아 빠르게 적용하기에 적합하다는 장점이 있었습니다. 두
            도구를 비교하며 프로젝트의 요구사항에 따라 적합한 도구를 선택하는 것이 중요하다는 점을 배웠습니다.
          </p>
        </>
      ),
      link: (
        <>
          <a href="https://github.com/Jetom88/eungeori" target="_blank">
            깃허브
          </a>
        </>
      ),
    },
    {
      projectName: "Mentoridge",
      projectSummary:
        "멘티가 배우고 싶은 분야를 학습하고, 멘토가 지식을 공유하며 수익을 창출할 수 있는 멘토링 플랫폼입니다.",
      contribution: (
        <>
          <p>
            <span>로고 및 자유게시판 글 조회 페이지 디자인:</span>
            애플리케이션의 로고와 자유게시판 글 조회 페이지의 UI/UX를 설계 및 구현하여, 사용자 친화적이고
            일관된 디자인을 제공.
          </p>
          <p>
            <span>멘티 리뷰 등록/수정/삭제 로직 구현:</span>
            멘티가 작성한 리뷰를 등록, 수정, 삭제할 수 있는 CRUD 기능을 구현하여 리뷰 관리의 편리성을
            제공하고, 데이터의 일관성을 유지하도록 설계.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">JavaScript</p>
          <p className="techStack">SCSS</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            로고와 페이지 디자인 작업을 통해 애플리케이션의 정체성을 시각적으로 표현하고, 사용자 경험을 고려한
            UI 설계의 중요성을 배웠습니다. 특히, 자유게시판의 정보 구조와 가독성을 최적화하는 데 중점을
            두었습니다.
          </p>
          <p>
            CRUD 기능을 구현하며 데이터베이스와 프론트엔드 간의 데이터 흐름 최적화에 대한 이해를 얻었습니다.
            특히, 사용자 피드백에 기반한 에러 처리와 성공 메시지 제공이 사용자 경험 향상에 얼마나 중요한
            역할을 하는지 체감했습니다.
          </p>
        </>
      ),
      link: (
        <>
          <a href="https://github.com/Dev-Mentoring-Platform/frontend" target="_blank">
            깃허브
          </a>
        </>
      ),
    },
    {
      projectName: "Starving",
      projectSummary:
        "레시피 공유 사이트 해먹남녀를 클론한 프로젝트. 사용자가 레시피를 검색하고 공유할 수 있는 기능을 제공하는 서비스입니다.",
      contribution: (
        <>
          <p>
            <span>검색 기능 구현 (Debounce 적용):</span>
            사용자가 입력한 검색어를 기반으로 레시피를 실시간으로 검색할 수 있는 기능을 개발. Debounce 기법을
            활용해 API 호출 빈도를 최적화하고, 사용자 경험을 개선.
          </p>
          <p>
            <span>레시피 추가 및 수정 기능 구현:</span>
            사용자가 새로운 레시피를 추가하거나 기존 레시피를 수정할 수 있는 기능을 개발. 데이터 유효성 검증과
            사용자 친화적인 입력 폼을 통해 편리한 사용 경험을 제공.
          </p>
          <p>
            <span>코멘트 수정 및 삭제 기능 구현:</span>
            레시피에 달린 코멘트를 수정하거나 삭제할 수 있는 기능을 구현하여 사용자 피드백 관리의 편의성을
            향상.
          </p>
        </>
      ),
      techStack: (
        <>
          <p className="techStack">React.js</p>
          <p className="techStack">Next.js</p>
          <p className="techStack">JavaScript</p>
          <p className="techStack">TailwindCSS</p>
        </>
      ),
      retrospect: (
        <>
          <p>
            Debounce 기법을 처음 적용하며, 사용자의 입력 이벤트와 API 호출 간의 효율적인 연동 방법을
            배웠습니다. 불필요한 API 호출을 줄이고 검색 결과를 실시간으로 반영하는 과정에서 성능 최적화와
            사용자 경험 개선의 중요성을 체감했습니다.
          </p>
          <p>레시피 데이터를 다루는 과정에서 데이터 검증과 상태 관리의 중요성을 다시 한번 느꼈습니다.</p>
          <p>
            CRUD 작업을 통해 데이터의 일관성과 안정성을 유지하는 방법에 대해 배울 수 있었습니다. 사용자 피드백
            관리를 간소화하면서도 직관적인 UI를 제공하는 데 중점을 두었습니다.
          </p>
        </>
      ),
      link: (
        <>
          <a href="https://github.com/Jetom88/starving" target="_blank">
            깃허브
          </a>
          <a
            href="https://velog.io/@jetom/No-15.-%EC%9E%90%EB%8F%99-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84debounce"
            target="_blank"
          >
            자동 검색 기능 구현(+debounce)
          </a>
        </>
      ),
    },
  ];

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

  const filteredProjectContent = projectOverViewContents.filter(
    (project) => project.projectName === popupContent
  )[0];

  return (
    <section className="carouselWrapper" aria-label="사이드프로젝트  소개 섹션">
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
      <h2 className="carouselProjectName">Side Project</h2>
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
      </Slider>
    </section>
  );
};

export default SideProjectSection;
