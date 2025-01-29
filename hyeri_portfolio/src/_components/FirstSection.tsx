import "../_style/firstSection.css";

const FirstSection = () => {
  return (
    <section className="firstWrapper">
      <header>
        <h2 className="mainText">
          <span className="semiBold">협업</span>과 <span className="semiBold">성장</span>에 집중하는 <br />
          프론트엔드 개발자 <span className="semiBold">신혜리</span>입니다.
        </h2>
      </header>

      <figure className="mainImg">
        <img src="/assets/main_img.png" alt="메인 사진" />
      </figure>

      <div className="scrollBox" aria-label="scroll down">
        <div className="icon" />
        <div className="icon" />
        <div className="icon" />
      </div>
    </section>
  );
};

export default FirstSection;
