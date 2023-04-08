import { Link } from "react-router-dom";
import "./index.css";

const GlobalFooter = (props) => {
    return (
        <footer className="footer">
            <div>
                <Link className="footer_links" id="terms_of_use">Terms of Use</Link>
                <Link className="footer_links" id="privacy_policy">Privacy Policy</Link>
                <Link className="footer_links" id="about">About</Link>
                <Link className="footer_links" id="help">Help</Link>
            </div>
            <div id="follow_us_links">Follow Us
                <Link className="social_media" id="facebook">Facebook</Link>
                <Link className="social_media" id="instagram">Insta</Link>
                <Link className="social_media" id="youtube">YouTube</Link>
            </div>
            <div id="copywright_sign_date">C 2023</div>
        </footer>
    
    );

};

export default GlobalFooter;