import { projectsOneData } from "@/db/projectsOneData";
import PageTitle from "@/components/sections/pageTitle";

const MonitoringEvaluation = () => {
  const currentProject = projectsOneData.find(
    (item) => item.title === "Monitoring and Evaluation",
  );

  return (
    <>
      <PageTitle
        currentPage="Monitoring and Evaluation"
        title="Monitoring and Evaluation"
      />
      <section className="service-details-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-content">
                {/* Auto Image */}
                {currentProject && (
                  <div className="service-details-image mb-4">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="img-fluid"
                    />
                  </div>
                )}

                {/* Content */}
                <p className="mb-3">
                  M&amp;E services are highly required to ensure the achievement
                  of objectives, examine compliance with time frames, and
                  estimate the extent of positive effects. Our expertise covers
                  the development of both theory and practice in monitoring and
                  evaluation methodology, and our breadth of knowledge and
                  experience allow us to provide a comprehensive set of
                  monitoring and evaluation services.
                </p>

                <p className="mb-3">
                  To measure the impacts resulting from the application of
                  development initiatives and programs implemented by NGOs,
                  donors, and governments, we assist enterprises in the design,
                  management, and review of monitoring systems at both the
                  project and enterprise level. We also provide governments with
                  M&amp;E systems for public sector management and strategies.
                </p>

                <p className="mb-3">
                  Our approach to M&amp;E is not only focused on quantitative
                  analysis and reporting achievements, but rather based on a
                  multidisciplinary approach where we connect technical
                  processes with social, economic, and institutional factors. We
                  ask key questions such as: what has been achieved, and why has
                  there been success or failure? What implications are inherent,
                  and how can they be addressed?
                </p>

                <p>
                  As a result, we have successfully built our portfolio of
                  effective qualitative methodologies and techniques that have
                  impacted organizations and communities throughout the region.
                  Dev Gate monitoring and evaluation services are tailored to
                  meeting client and project needs in a professional way, while
                  also providing benefits to a wide range of stakeholders. We
                  support effective management decision-making, guide
                  development partner decisions, and provide solutions to
                  academic institutions through building models of application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MonitoringEvaluation;
