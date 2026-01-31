import PageTitle from "@/components/sections/pageTitle"
import { projectsOneData } from "@/db/projectsOneData";

const TechnologyinResearch = () => {
    const currentProject = projectsOneData.find(
        (item) => item.title === "Technology in Research"
    );
    return (
        <>
            <PageTitle currentPage="Technology in Research" title="Technology in Research" />
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
                                Based on international studies implemented to compare
                                between paper-based and tablet-based social surveys, the
                                results show savings in both costs and time. The cost per
                                completed interview for the tablet-based survey was 74%
                                less than the paper-based survey average, and the average
                                time per interview question for the tablet-based survey
                                was 46% less than the paper-based survey average.
                            </p>

                            <p className="mb-4">
                                In survey technology, we pioneered the use of
                                computer-assisted recorded interviewing, which helps
                                facilitate the management of field interviewers,
                                identify potential fraud, and reduce data quality
                                problems. That spirit of innovation continues today
                                with the development of mobile and web-based tools that
                                are sophisticated enough to operate in security-conscious
                                environments, but streamlined enough to work on tablets
                                in countries with limited internet infrastructure.
                            </p>

                            {/* Features & Benefits */}
                            <p className="mb-2">
                                <strong>Technology App features and benefits:</strong>
                            </p>

                            <ul className="service-details-list">
                                <li>Easily create or convert paper surveys into manageable mobile forms (paperless approach)</li>
                                <li>Collect data anywhere with offline mobile forms</li>
                                <li>Each survey location will be recorded on the system</li>
                                <li>Pilot survey (ideally at least one week in advance)</li>
                                <li>Send mobile forms with pre-populated data to notify employees of new tasks</li>
                                <li>Capture images and videos and sketch notes on photos</li>
                                <li>Collect and store digital signatures</li>
                                <li>
                                    Get all data each and every time with fillable forms
                                    on tablets and smartphones which will save money and
                                    time
                                </li>
                                <li>Turn days into minutes with real-time data delivery</li>
                                <li>Dispatch new forms to the team in the field</li>
                                <li>
                                    Data will be collected in different locations including
                                    secured cloud server
                                </li>
                                <li>Permissions, Security, and Form Dispatch made easy</li>
                                <li>
                                    Share forms and detailed permissions for all data
                                    collectors or group of them or even for individuals
                                </li>
                                <li>Build Custom Analytics Dashboards</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default TechnologyinResearch