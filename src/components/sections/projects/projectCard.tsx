import { ProjectDataType } from "@/db/projectsOneData";
import { Link } from "react-router-dom";

type ProjectCardPropsType = {
  project: ProjectDataType;
  className?: string;
  iconCalss?:string;
  isIconShow?: boolean;
};

const ProjectCard = ({ project, className }: ProjectCardPropsType) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="service-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="service-content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <Link to={project.link} className="btn-read">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
