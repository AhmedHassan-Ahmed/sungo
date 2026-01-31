import PageTitle from "@/components/sections/pageTitle";
// import ServiceCard from "@/components/sections/services/serviceCard";
// import { serviceOneData } from "@/db/serviceOneData";

import { projectsOneData } from "@/db/projectsOneData";
const Service = () => {

  const currentProject = projectsOneData.find(
    (project) => project.title === "School Management",
  );

  return (
    <>
      <PageTitle title="School Management" currentPage="School Management" />
      <section className="service-details-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="service-details-content">
                {/* Image */}
                <div className="service-details-image mb-4">
                  {currentProject && (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="img-fluid"
                    />
                  )}
                </div>

                {/* Intro Text */}
                <p className="mb-4">
                  We are an Education Service Provider (ESPs), or education
                  management company, that contracts with new or existing public
                  or private schools to help them in the startup phase and
                  implement comprehensive reforms. From a complete study and
                  advice of school’s strategic and operational objectives to
                  daily activity planning, our team is always engaged with
                  various levels of management and staff to assist in defining
                  the school’s operational model.
                </p>

                {/* Bullet List */}
                <ul className="service-details-list mb-5">
                  <li>Professional Development and Training</li>
                  <li>Teaching and learning processes</li>
                  <li>Resources and educational materials</li>
                  <li>Staffing and recruitment</li>
                  <li>Certification</li>
                  <li>Health and Safety</li>
                  <li>Special Needs</li>
                  <li>Activity Plans</li>
                  <li>Administration and IT</li>
                  <li>Operational best practice</li>
                </ul>

                {/* Section Heading */}
                <h3 className="service-details-title mb-3">
                  The Most Important Characteristics of the Schools’ Culture,
                  Instructional Design, and Educational Methodologies
                </h3>

                {/* Description */}
                <p className="mb-3">
                  Development Gate schools maintain a culture that promotes
                  trust, respect, and responsibility. Students and teachers have
                  exceptional ownership of the learning experience and their
                  school environment. Working on projects and in teams, students
                  are accountable to their peers and acquire a level of
                  responsibility similar to what they would experience in a
                  professional work environment.
                </p>

                <p className="mb-3">
                  Any school under our management will focus on
                  interdisciplinary, project-based learning using the STEM
                  approach with a focus on science, technology, engineering,
                  art, and mathematics. The engineering design process will
                  provide the overarching theme of the school.
                </p>

                <p>
                  Our schools represent a standard innovative learning
                  environment based on project-based learning approaches,
                  engaging students with dynamic, rigorous curriculum and
                  connecting schools inside and outside Egypt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    </>
  );
};

export default Service;
