import { Link } from "react-router-dom";
import SectionTitle from "@/components/ui/sectionTitle";

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Section Title */}
        <SectionTitle className="text-center mb-5">
          <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
          <SectionTitle.Title>ABOUT US</SectionTitle.Title>
        </SectionTitle>

        <div className="row g-4">
          {/* Mission */}
          <div className="col-lg-4 col-md-6">
            <div className="about-card text-center">
              <div className="about-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <div className="circle">
                <Link to="/about" className="about-link">
                  <i className="fa fa-suitcase fa-3x"></i>
                </Link>
              </div>
              <h5>
                <Link to="/about" className="about-link">
                  Mission
                </Link>
              </h5>

              <p>
                Participate in improving the human condition by turning
                knowledge into practice and actions. And to be of the world’s
                leading independent development services companies, recognized
                for solving critical social and scientific problems in
                Education, Health, Poverty, Unemployment, and Women Empowerment.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="col-lg-4 col-md-6">
            <div className="about-card text-center">
              <div className="about-icon">
                <i className="bi bi-gem"></i>
              </div>
              <div className="circle">
                <Link to="/about" className="about-link">
                  <i className="fa fa-diamond fa-3x"></i>
                </Link>
              </div>
              <h5>
                <Link to="/about" className="about-link">
                  Values
                </Link>
              </h5>

              <p>
                Integrity – Honesty – Excellence – Innovation – Respect for the
                Individual – Fiscal Responsibility – Objectivity. Integrity: We
                perform with the highest ethical standards of individual and
                group. We communicate openly and realistically with each other
                and our clients. Excellence: We strive to deliver results with
                exceptional quality and value. Innovation: We encourage
                multidisciplinary thinking and creative solutions.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="col-lg-4 col-md-12">
            <div className="about-card text-center">
              <div className="about-icon">
                <i className="bi bi-journal-text"></i>
              </div>
              <div className="circle">
                <Link to="/about" className="about-link">
                  <i className="fa fa-book fa-3x"></i>
                </Link>
              </div>

              <h5>
                <Link to="/about" className="about-link">
                  Who We Are
                </Link>
              </h5>

              <p>
                Development Gate International established in 2015 under the
                name of Edu Gate International as an individual facility
                focusing only on Education Services. In January 2019 the company
                converted into a Limited Liability Company under the Egyptian
                Investment Authority with the name of Development Gate
                International. The company’s team qualification and experience
                has earned us strong credibility and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
