import "../../_style/navigation.css";

const Navigation = ({ navColor }: { navColor: string }) => {
  const openPdf = () => {
    const path = "/resume.pdf";
    const width = 1200;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(path, "resume", `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <nav className={navColor === "black" ? "blackNaviWrapper" : "whiteNaviWrapper"}>
      <div className="naviContainer">
        <div className="linkWrapper">
          <p>SHINHYERI</p>
          <ul className="linkContents">
            <li>
              <a
                href="https://github.com/Jetom88"
                className={navColor === "black" ? "blackLink" : "whiteLink"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://velog.io/@jetom/posts"
                className={navColor === "black" ? "blackLink" : "whiteLink"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Velog
              </a>
            </li>
            <li>
              <button className={navColor === "black" ? "blackButton" : "whiteButton"} onClick={openPdf}>
                Resume
              </button>
            </li>
          </ul>
        </div>
        <p>Portfolio</p>
        <p>Front-End Developer</p>
      </div>
    </nav>
  );
};

export default Navigation;
