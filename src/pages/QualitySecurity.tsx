import { projectsOneData } from "@/db/projectsOneData";
import PageTitle from "@/components/sections/pageTitle"

const QualitySecurity = () => {
    const currentProject = projectsOneData.find(
        (item) => item.title === "Quality & Security"
    );
    return (
        <>
            <PageTitle currentPage="Quality & Security" title="Quality & Security" />
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
                                “Data quality” is the most underappreciated part of a
                                project. It is the part that takes the most time.
                            </p>

                            <p className="mb-3">
                                Data quality therefore refers to data that is fit for
                                purpose or “fit for use”. This generally accepted view
                                recognizes that the quality of data is determined by the
                                consumer — the person who will use it and who will
                                ultimately decide if it is fit for whatever purpose it
                                is intended.
                            </p>

                            <p className="mb-3">
                                We are looking at data as a product. Data as a product
                                requires the application of sound management principles
                                involving:
                            </p>

                            {/* Data Quality List */}
                            <ul className="service-details-list mb-4">
                                <li>Understanding the needs of people using the data</li>
                                <li>Assessing data for quality at source</li>
                                <li>
                                    Creating a data quality culture and assurance through
                                    training before launching the data collection phase
                                </li>
                                <li>
                                    Developing procedures and metrics for ongoing analysis
                                    and improvement
                                </li>
                                <li>
                                    Managing the life cycle of the data through a
                                    management plan
                                </li>
                                <li>
                                    Appointing a manager responsible for the quality of
                                    the data
                                </li>
                                <li>
                                    Bench test survey (ideally at least two weeks in
                                    advance)
                                </li>
                                <li>
                                    Pilot survey (ideally at least one week in advance)
                                </li>
                            </ul>

                            {/* Data Security */}
                            <p className="mb-2">
                                <strong>Data Security & Research Ethics:</strong>
                            </p>

                            <ul className="service-details-list mb-4">
                                <li>
                                    Create data security plan and set up encryption before
                                    launch
                                </li>
                                <li>
                                    Maintain data security plan (especially encryption)
                                    throughout project life-cycle
                                </li>
                            </ul>

                            {/* Knowledge Management */}
                            <p className="mb-2">
                                <strong>Knowledge Management & Transparency:</strong>
                            </p>

                            <ul className="service-details-list">
                                <li>Back up data in at least two locations</li>
                                <li>Save ALL project files to Box</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default QualitySecurity