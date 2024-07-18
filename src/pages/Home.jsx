// import profilePicture from "../assets/Passport Size Photo.png";
import profilePicture from "../assets/profile-pic.png";
import "./Homepage.css";

const Home = () => {
	return (
		<div className="home">
			<img
				className="profile-image"
				src={profilePicture}
				alt="Sachin Alam Profile"
			/>

			<div className="home-info">
				<p className="home-name-title">Hi, I&apos;m Sachin </p>
				<p className="home-name-info">Full Stack Web Developer | MERN Stack</p>
			</div>

			<div>
				<p className="home-dev-title">
					Crafting seamless digital experiences from code to cloud.
				</p>
			</div>

			<div>
				<a
					className="nav-link btn btn-primary"
					href="https://github.com/CommunityPro/portfolio-html"
				>
					CONNECT WITH ME
				</a>
			</div>
		</div>
	);
};

export default Home;
