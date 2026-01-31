// import AboutTwo from "@/components/sections/about/aboutTwo"
// import MarqueTwo from "@/components/sections/marques/marqueTwo"
// import PartnersOne from "@/components/sections/partners/partnersOne"
// import ProjectsTwo from "@/components/sections/projects/projectsTwo"
// import Offer from "@/components/sections/offer"
import PageTitle from "@/components/sections/pageTitle"
// import TeamesThree from "@/components/sections/teames/teamesThree"
import SectionTitle from "@/components/ui/sectionTitle"

const About = () => {
  return (
    <>
      <PageTitle title="Who We are" currentPage="Who We are"/>
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
                                    <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                                    <SectionTitle.Title>
                                        Who <span>We Are</span>
                                    </SectionTitle.Title>
                                </SectionTitle>

                                <p className="mt-4 wow slideUp" data-delay=".3">
                                    Development Gate International was established in 2015
                                    under the name of Edu Gate International as an individual
                                    facility focusing only on Education Services. In January
                                    2019, the company converted into a Limited Liability
                                    Company under the Egyptian Investment Authority with the
                                    name of Development Gate International.
                                </p>

                                <p className="mt-3 wow slideUp" data-delay=".5">
                                    The company’s team qualification and experience has earned
                                    us a reputation for excellence and leadership in education,
                                    care, technology, and research.
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

export default About