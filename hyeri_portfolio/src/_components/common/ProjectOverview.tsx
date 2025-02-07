import { useEffect, useRef } from "react";
import "../../_style/projectOverview.css";

type ProjectOverviewProps = {
  projectName: string;
  projectSummary: string;
  contribution: React.ReactNode;
  techStack: React.ReactNode;
  retrospect: React.ReactNode;
  link?: React.ReactNode;
  onClose: () => void;
};

const ProjectOverview = ({
  projectName,
  projectSummary,
  contribution,
  techStack,
  retrospect,
  link,
  onClose,
}: ProjectOverviewProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <section className="projectOverviewWrapper">
      <div className="projectOverviewContainer" ref={popupRef} onClick={(e) => e.stopPropagation()}>
        <div className="projectTitleWrapper">
          <div className="dotWrapper">
            <div />
            <div />
            <div />
          </div>
          <h2 className="projectName">{projectName}</h2>
          <div />
        </div>
        <div className="projectSummary">
          <p>{projectSummary}</p>
        </div>

        <div className="projectContentsWrapper">
          <div>
            <h3>✨ 작업 기여도</h3>
            {contribution}
          </div>
          <div>
            <h3>🛠️ 기술 스택</h3>
            <div className="techStackWrapper">{techStack}</div>
          </div>
          <div>
            <h3>💬 회고</h3>
            {retrospect}
          </div>

          <div className="projectLinkContents">
            <h3>🔗 관련 링크</h3>
            {link}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
