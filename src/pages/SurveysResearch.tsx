import PageTitle from "@/components/sections/pageTitle";
import { projectsOneData } from "@/db/projectsOneData";

const ProjectCarousel = () => {
  const currentProject = projectsOneData.find(
    (item) => item.title === "Surveys Research",
  );
  return (
    <>
      <PageTitle title="Surveys Research" currentPage="Surveys Research" />
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

                {/* Intro */}
                <p className="mb-3">
                  Cutting-edge survey research has been a cornerstone of our
                  work since our founding. Our work is anchored in proven
                  methods and best practices in the survey industry, with a
                  strong emphasis on timeliness, efficiency, quality, and
                  technological innovation. Increasingly, this requires
                  mixed-mode surveying and mobile technology solutions.
                </p>

                <p className="mb-3">
                  A survey is a research method for collecting information from
                  a selected group of people using standardized questionnaires
                  or interviews. While many people think of a questionnaire as a
                  “survey,” the questionnaire is just one part of the survey
                  process. Survey also require selecting populations for
                  inclusion, pretesting instruments, determining delivery
                  methods, creating validity, and analyzing results. In
                  continuous quality improvement, surveys help to identify
                  customer expectations, increase satisfaction levels, and
                  determine specific needs for improvement.
                </p>

                {/* Survey Format */}
                <p className="mb-2">
                  <strong>Survey Format:</strong>
                </p>

                <p className="mb-2">Surveys can be conducted through:</p>

                <ul className="service-details-list mb-4">
                  <li>Face-to-face interviews</li>
                  <li>Telephone interviews</li>
                  <li>Paper questionnaires</li>
                  <li>Online questionnaires</li>
                  <li>A combination of these methods</li>
                </ul>

                {/* Decision Factors */}
                <p className="mb-2">
                  <strong>
                    Some factors to consider in deciding on a format are:
                  </strong>
                </p>

                <p className="mb-2">
                  <strong>Cost:</strong>
                </p>

                <p className="mb-3">
                  The cost of face-to-face and telephone interviews are
                  generally higher than other formats and stem from interviewer
                  expenses. Paper survey costs depend on materials, printing,
                  and postage. The cost of an electronic format survey depends
                  on whether software is purchased or free online survey service
                  is used. Several companies offer limited web survey services
                  at no cost. These types of service can be found by using a Web
                  search engine to search for “free web surveys.” Generally, web
                  surveys tend to be the least expensive format.
                </p>

                <p className="mb-2">
                  <strong>Project Length:</strong>
                </p>

                <p className="mb-3">
                  Across all survey formats, development of the questionnaire
                  generally takes about the same amount of time. It is
                  administration of the questionnaire and the data entry
                  requirements that vary by format. Typically, online
                  questionnaires require the least amount of time and resources
                  for data entry in short projects.
                </p>

                <p className="mb-2">
                  <strong>Sampling Bias:</strong>
                </p>

                <p>
                  To produce valid and useful results, the population being
                  surveyed should fairly represent stakeholder interests. Some
                  survey formats, such as online surveys, may not reach all
                  audiences since some members may not have access to the Web or
                  email. For example, older persons are less likely to use the
                  Internet and email, so an online survey of retired persons may
                  not be the best choice. A mailed or phone survey may be a
                  better choice for these types of audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCarousel;
