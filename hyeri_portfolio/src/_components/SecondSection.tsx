import "../_style/secondSection.css";

const SecondSection = () => {
  return (
    <section className="secondWrapper">
      <header className="nameContents">
        <h2>SHIN HYE RI</h2>
        <p>안녕하세요 프론트엔드 개발자 신혜리입니다.</p>
      </header>
      <article className="interviewWrapper">
        <img src="/assets/introduce_img.png" alt="소개 이미지" />
        <div>
          <p className="goalTitle">프론트엔드 개발자로서 이루고 싶은 목표</p>
          <p>
            저는 기술적 전문성을 높여 성능 최적화와 웹 접근성 분야에서 더 깊이 있는
            <br /> 개발자로 성장하고 싶습니다. 또한 팀 내에서 코드 리뷰와 기술 공유를 주도하며
            <br /> 동료들과 함께 성장하는 문화를 만들어가고 싶습니다.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SecondSection;
