import { Link } from "react-router-dom";
import "../../assets/scss/_footer.scss";

const Footer = () => {
    return (
        <footer className="simple-footer">
            <div className="simple-footer__container">
                {/* Left */}
                <p className="simple-footer__text">
                    © All right reserved, Dev Gate 2019
                </p>

                {/* Center */}
                <div className="simple-footer__social">
                    <Link to="#" className="simple-footer__icon">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </div>

                {/* Right */}
                <p className="simple-footer__text">
                    Education Base by Acme Themes
                </p>
            </div>
        </footer>
    );
};

export default Footer;
