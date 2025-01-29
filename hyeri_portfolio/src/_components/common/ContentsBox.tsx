import "../../_style/contentsBox.css";

const ContentsBox = ({ title, content, hover }: { title: string; content: string; hover?: boolean }) => {
  return (
    <section className={`${hover ? "hoverContentBoxWrapper" : "contentsBoxWrapper"}`}>
      <div>
        <p className="contentsTitle">{title}</p>
        <p className={`${hover ? "hoverContent" : "contentBoxDescription"}`}>{content}</p>
      </div>
      {hover && <button className="readMore">자세히 보기</button>}
    </section>
  );
};

export default ContentsBox;
