import { FolderSimple, Star, Circle, GitMerge } from "phosphor-react";

import { ProjectCardContainer } from "./styles";

export function ProjectCard() {
  return (
    <ProjectCardContainer>
      <div className="project-title">
        <FolderSimple size={24} />
        <h3>My-Onix</h3>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        accusantium quisquam labore!
      </p>
      <div className="project-status">
        <div className="project-status-stars">
          <div className="project-status-individual">
            <Star size={24} />
            <span>100</span>
          </div>
          <div className="project-status-individual">
            <GitMerge size={24} />
            <span>100</span>
          </div>
        </div>
        <div className="project-status-individual">
          <Circle weight="fill" className="circle-svg" />
          <span>Javascript</span>
        </div>
      </div>
    </ProjectCardContainer>
  );
}
