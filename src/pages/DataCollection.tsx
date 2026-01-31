import PageTitle from "@/components/sections/pageTitle"
import { projectsOneData } from "@/db/projectsOneData";

const DataCollection = () => {
     const currentProject = projectsOneData.find(
        (item) => item.title === "Data Collection"
    );
    return (
        <>
            <PageTitle title="Data Collection" currentPage="Data Collection" />
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
                                We support all modes of data collection — face-to-face,
                                phone, web, and mail. We employ computer-assisted
                                methodologies and evolving mobile technologies to adapt
                                to different situations, enhance participation rates,
                                and control costs. This includes utilizing mixed-mode
                                designs when appropriate.
                            </p>

                            <p className="mb-3">
                                Data collection is a process of collecting information
                                from all the relevant sources to find answers to the
                                research problem, test the hypothesis, and evaluate the
                                outcomes.
                            </p>

                            <p className="mb-3">
                                Data collection is an important aspect of any type of
                                research study. Inaccurate data collection can impact
                                the results of a study and ultimately lead to invalid
                                results.
                            </p>

                            <p className="mb-4">
                                Data collection methods for impact evaluation vary along
                                a continuum. At one end of this continuum are quantitative
                                methods and at the other end are qualitative methods for
                                data collection.
                            </p>

                            {/* Quantitative Section */}
                            <p className="mb-3">
                                <strong>Quantitative data collection methods</strong> rely
                                on random sampling and structured data collection
                                instruments that fit diverse experiences into
                                predetermined response categories. They produce results
                                that are easy to summarize, compare, and generalize.
                            </p>

                            {/* RCT Section */}
                            <p className="mb-2">
                                <strong>Randomized Controlled Trials</strong>
                            </p>

                            <p className="mb-4">
                                The randomized control trial (RCT) is a trial in which
                                subjects are randomly assigned to one of two groups:
                                one (the experimental group) receiving the intervention
                                that is being tested, and the other (the comparison or
                                control group) receiving an alternative (conventional)
                                treatment. The two groups are then followed up to see
                                if there are any differences between them in outcome.
                                The results and subsequent analysis of the trial are
                                used to assess the effectiveness of the intervention.
                            </p>

                            {/* Qualitative Section */}
                            <p>
                                <strong>Qualitative data collection methods</strong> play
                                an important role in impact evaluation by providing
                                information useful to understand the processes behind
                                observed results and assess changes in people’s
                                perceptions of their well-being. Furthermore, qualitative
                                methods can be used to improve the quality of survey-based
                                quantitative evaluations by helping generate evaluation
                                hypotheses, strengthening the design of survey
                                questionnaires, and expanding or clarifying quantitative
                                evaluation findings.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DataCollection