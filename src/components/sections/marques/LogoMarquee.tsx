// import React from "react";
import SectionTitle from "@/components/ui/sectionTitle";
const logos = [
    { src: "/img/partners/stanford.webp", alt: "Stanford University" },
    { src: "/img/partners/deloitte.webp", alt: "Deloitte" },
    { src: "/img/partners/jpal.webp", alt: "J-PAL" },
    { src: "/img/partners/mit.webp", alt: "MIT" },
    { src: "/img/partners/unesco.webp", alt: "UNESCO" },
    { src: "/img/partners/illinois.webp", alt: "University of Illinois" },
    { src: "/img/partners/aub.webp", alt: "American University in Cairo" },
    { src: "/img/partners/wwb.webp", alt: "Women's World Banking" },
    { src: "/img/partners/iecd.webp", alt: "IECD" },
    { src: "/img/partners/save-the-children.webp", alt: "Save the Children" },
];

const LogoMarquee = () => {
    return (
         <section className="logo-marquee">
            {/* Section Title */}
             <SectionTitle className="text-center mb-5">
                      <SectionTitle.SubTitle>Our Clients</SectionTitle.SubTitle>
                      <SectionTitle.Title>Our Clients</SectionTitle.Title>
                    </SectionTitle>
                    <br />

            {/* Marquee */}
            <div className="logo-track">
                {[...logos, ...logos].map((logo, index) => (
                    <div className="logo-item" key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoMarquee;
