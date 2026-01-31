import PageTitle from "@/components/sections/pageTitle"
// import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup"
// import ServiceSidebar from "@/components/sections/services/serviceSidebar"

// import { useLocation } from "react-router-dom";
import { projectsOneData } from "@/db/projectsOneData";

const Nurseriespreschools = () => {


    const currentProject = projectsOneData.find(
        (item) => item.title === "Nurseries / Preschools"
    );

    return (
        <>        
        <PageTitle title="Nurseries/Preschools" currentPage="Nurseries/Preschools" />
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
                            <p>
                                Dev Gate is managing 15 nurseries and preschools in Egypt.
                                Focusing on the six main domains of childhood development:
                                <strong>
                                    {" "}Cognitive Development, Creative Expression,
                                    Executive Function, Language and Literacy,
                                    Physical Development and Wellness, and Social and
                                    Emotional Development
                                </strong>,
                                the curriculum is designed to nurture children
                                academically, socially, emotionally, and physically.
                            </p>

                            <p className="mt-3">
                                Joining the Dev Gate nurseries and preschools group
                                entitles many benefits and services to assist in
                                starting and running a preschool including the
                                management system, full curriculum, teacher training,
                                design, branding and marketing services, and much more.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
};

export default Nurseriespreschools;
