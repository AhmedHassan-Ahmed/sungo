import PageTitle from "@/components/sections/pageTitle"
// import TeamesTwo from "@/components/sections/teames/teamesTwo"
import SectionTitle from "@/components/ui/sectionTitle"
const Team = () => {
  return (
    <>
        <PageTitle title="Values" currentPage="Values"/>
        <section
            id="values"
            className="about-section section-padding fix bg-cover"
            style={{ backgroundImage: 'url("/img/service/service-bg-2.jpg")' }}
        >
            <div className="container">
                <div className="about-wrapper style-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Our Core Values</SectionTitle.SubTitle>
                                    <SectionTitle.Title>
                                        What <span>We Stand For</span>
                                    </SectionTitle.Title>
                                </SectionTitle>

                                <p className="mt-4 wow slideUp" data-delay=".3">
                                    Integrity – Honesty – Excellence – Innovation – Respect for the Individual –
                                    Fiscal Responsibility – Objectivity.
                                </p>

                                <div className="mt-4 wow slideUp" data-delay=".5">
                                    <p><strong>Integrity:</strong> We perform with the highest ethical standards of individuals and groups. We communicate openly and realistically with each other and our clients.</p>

                                    <p className="mt-2"><strong>Excellence:</strong> We strive to deliver results with exceptional quality and value.</p>

                                    <p className="mt-2"><strong>Innovation:</strong> We encourage multidisciplinary collaboration, creativity, and independent thinking in everything we do.</p>

                                    <p className="mt-2"><strong>Respect for the Individual:</strong> We treat one another fairly, with dignity and equity, and support each other to develop to our full potential.</p>

                                    <p className="mt-2"><strong>Fiscal Responsibility:</strong> We operate with financial integrity and transparency. We are accountable for cost competitiveness and continuing financial responsibility.</p>

                                    <p className="mt-2"><strong>Objectivity:</strong> Our work is independent of undue influences by political, economic, or other factors. We maintain the highest level of scientific objectivity in our work.</p>
                                </div>
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

export default Team