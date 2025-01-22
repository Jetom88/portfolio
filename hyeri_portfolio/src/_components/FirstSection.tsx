import "../_style/firstSection.css";

const FirstSection = () => {
  return (
    <div className="wrapper">
      <h2 className="mainText">
        <span className="bold">협업</span>과 <span className="bold">성장</span>에 집중하는 <br />
        프론트엔드 개발자 <span className="bold">신혜리</span>입니다.
      </h2>

      <div className="mainImg">
        <img src="/assets/main_img.png" alt="main img" />
      </div>

      <div className="scrollBox">
        <div className="icon" />
        <div className="icon" />
        <div className="icon" />
      </div>
    </div>
  );
};

export default FirstSection;
