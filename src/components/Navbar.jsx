import { FaLocationArrow } from "react-icons/fa";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">SachinAlam</div>

			<div className="nav-links">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/">Contacts</a>
					</li>
				</ul>
			</div>

			<div className="nav-btn">
				
        <div className="nav-resume">
					<a
						className="nav-link btn btn-primary"
						href="https://github.com/CommunityPro/portfolio-html"
					>
						RESUME <FaLocationArrow size={"0.8rem"} />
					</a>
				</div>

				<div className="theme-switch">
					<img className="moon" alt="Dark Theme" src={moon} />
					{/* <img className="sun" alt="Light Theme" src={sun} /> */}
				</div>
			
      </div>
		</div>
	);
};

export default Navbar;
