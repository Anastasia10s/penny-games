import { Link } from "react-router-dom";
import "./index.css";

const GlobalHeader = (props) => {
    return (
        <header className="header">
            <img id="Horse-Logo" src="../src/assets/chess-icon.png"></img>
            <Link className="header_link" id="games" to="">Games</Link>
            <Link className="header_link" id="pricing" to="">Pricing</Link>
            <button id="login-button">Login</button>
        </header>
    );

};

export default GlobalHeader;