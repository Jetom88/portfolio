import "../../_style/contentsBox.css";

const ContentsBox = ({
  title,
  content,
  hover,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  title: string;
  content: string;
  hover?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  return (
    <section
      className={`${hover ? "hoverContentBoxWrapper" : "contentsBoxWrapper"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <p className="contentsTitle">{title}</p>
        <p className={`${hover ? "hoverContent" : "contentBoxDescription"}`}>{content}</p>
      </div>
      {hover && (
        <button className="readMore" onClick={onClick}>
          자세히 보기
        </button>
      )}
    </section>
  );
};

export default ContentsBox;
