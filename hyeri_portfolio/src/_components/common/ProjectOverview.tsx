import "../../_style/projectOverview.css";

const ProjectOverview = () => {
  return (
    <section className="projectOverviewWrapper">
      <div className="projectTitleWrapper">
        <div className="dotWrapper">
          <div />
          <div />
          <div />
        </div>
        <h2 className="projectName">N-PIK</h2>
        <div />
      </div>
      <div className="projectSummary">
        <p>
          N-PIK은 웹 브라우저에서 즉시 플레이할 수 있는 다양한 게임을 제공합니다. 이용자들은 암호화폐를 이용해
          전 세계 유저들과 베팅을 하며 승패를 가리는 게임을 즐길 수 있습니다.
        </p>
      </div>

      <div className="projectContentsWrapper">
        <div>
          <h3>✨ 작업 기여도</h3>

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
        </div>
        <div>
          <h3>🛠️ 기술 스택</h3>
          <div className="techStackWrapper">
            <p className="techStack">React.js</p>
            <p className="techStack">Next.js</p>
            <p className="techStack">TypeScript</p>
            <p className="techStack">Emotion</p>
            <p className="techStack">Zustand</p>
          </div>
        </div>
        <div>
          <h3>💬 회고</h3>
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
        </div>

        <div className="linkContents">
          <h3>🔗 관련 블로그</h3>
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
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
