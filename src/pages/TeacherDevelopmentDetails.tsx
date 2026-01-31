import PageTitle from "@/components/sections/pageTitle"
// import ServicesFive from "@/components/sections/services/servicesFive"

import { projectsOneData } from "@/db/projectsOneData";

const TeacherDevelopmentDetails = () => {
 

    const currentProject = projectsOneData.find(
        (item) => item.title === "Teacher Professional Development"
    );

    return (
        <>
        <PageTitle title="Teacher professional Development" currentPage="Teacher professional Development" />
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
                            <p className="mb-4">
                                Dev Gate provides your school/academy with an individually
                                tailored programme of lesson observations, training and
                                mentoring, in order to turn MOE “requires improvement” into
                                “outstanding” as rapidly as possible. By providing your
                                school/academy with a dedicated Coach, we will focus on the
                                following key areas:
                            </p>

                            {/* Bullet Points */}
                            <ul className="service-details-list mb-4">
                                <li>Students progress;</li>
                                <li>Teaching and learning;</li>
                                <li>Teacher planning;</li>
                                <li>Assessment for learning;</li>
                                <li>Creativity in learning (including IT);</li>
                                <li>Positive behavior for learning;</li>
                                <li>Leadership in the classroom;</li>
                                <li>Students and family support;</li>
                            </ul>

                            {/* Paragraphs */}
                            <p className="mb-3">
                                Dev Gate employs a unique approach towards excellence in
                                primary teaching namely “Teacher as a”. Starting from
                                teachers as deliverers, moving up the ranks within our
                                qualifications, towards developing own materials,
                                evaluating, researching and ultimately becoming a leader.
                            </p>

                            <p>
                                Each unit is intrinsically linked with teacher’s excellence
                                aspects (“Teacher as a”), reputed and renowned standards
                                such as QTS (Qualified Teacher Status) & NOS (National
                                Occupational Standards) and last but not least well
                                established methodologies such as Bloom’s Taxonomy of HOTS
                                (High Order Thinking Skills) and 21st century pedagogy.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default TeacherDevelopmentDetails;