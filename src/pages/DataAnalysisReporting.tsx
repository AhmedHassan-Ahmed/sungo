import PageTitle from "@/components/sections/pageTitle"
import { projectsOneData } from "@/db/projectsOneData";
const DataAnalysisReporting = () => {
    const currentProject = projectsOneData.find(
        (item) => item.title === "Data Analysis & Reporting"
    );
    return (
        <>
            <PageTitle currentPage="Data Analysis & Reporting" title="Data Analysis & Reporting" />
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
                                Understanding the distinction between data reporting and
                                analysis will help you avoid making similar data mistakes
                                with your business. Data reporting, like the poll data
                                used in elections, can tell you what is happening with
                                your business, but without context or knowing why
                                something is happening, your interpretation will not be
                                based on all the facts.
                            </p>

                            <p className="mb-3">
                                Our commitment to outstanding survey research carries
                                through to the analysis phase. We provide our clients
                                with all the information they need to understand, access,
                                and extrapolate results from data generated through our
                                surveys.
                            </p>

                            <p>
                                We also provide clients with expertise in report writing
                                and publication and dissemination of study findings. By
                                providing clear analyses and reports, we aim to empower
                                clients to use the resulting insights to inform policy,
                                improve programs, or guide institutional or individual
                                practice.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default DataAnalysisReporting