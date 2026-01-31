// import ContactAddress from "@/components/sections/contact/contactAddress"
// import ContactForm from "@/components/sections/contact/contactForm"
// import ContactMap from "@/components/sections/contact/contactMap"
import PageTitle from "@/components/sections/pageTitle"

const Contact = () => {
    return (
        <>
            <PageTitle currentPage="Contact Us" title="Contact Us" />
             
        <section className="contact-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="contact-form-wrapper">

                            <form className="contact-form">

                                {/* Name */}
                                <div className="form-group mb-3">
                                    <label>Your Name (required)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group mb-3">
                                    <label>Your Email (required)</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder=""
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div className="form-group mb-3">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>

                                {/* Message */}
                                <div className="form-group mb-4">
                                    <label>Your Message</label>
                                    <textarea
                                        className="form-control"
                                        rows={6}
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button type="submit" className="theme-btn">
                                    Send
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Contact