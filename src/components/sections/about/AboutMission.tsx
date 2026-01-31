import PageTitle from "@/components/sections/pageTitle"
import SectionTitle from "@/components/ui/sectionTitle"
const AboutMission = () => {
  return (
    <>
        <PageTitle title="Our Mission" currentPage="Our Mission"/>
        <section
            id="about"
            className="about-section section-padding fix bg-cover"
            style={{ backgroundImage: 'url("/img/service/service-bg-2.jpg")' }}
        >
            <div className="container">
                <div className="about-wrapper style-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-content text-center">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Our Mission</SectionTitle.SubTitle>
                                    <SectionTitle.Title>
                                        Turning Knowledge into <span>Action</span>
                                    </SectionTitle.Title>
                                </SectionTitle>

                                <p className="mt-4 wow slideUp" data-delay=".3">
                                    Participate in improving the human condition by turning
                                    knowledge into practice and actions. And to be of the
                                    world’s leading independent development services
                                    companies, recognized for solving critical social and
                                    scientific problems in Education, Health, Poverty,
                                    Unemployment, and Women Empowerment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    </>
  )
}

export default AboutMission