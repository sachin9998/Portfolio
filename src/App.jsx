import { FaGithub } from "react-icons/fa";
import "./App.css";
function App() {
  return (
    <>
      <header id="hero">
        {/* <!-- Navbar --> */}
        <nav className="navbar">
          <div className="container">
            {/* <!-- Logo --> */}
            <h1 id="logo">
              <a href="https://github.com/Sachin9998">
                {/* <img src="./assets/logo.png" alt="Your Logo" /> */}
                Sachin<span className="">Alam</span>.in
              </a>
            </h1>
            {/* <!-- Navbar links --> */}
            <ul className="nav-menu">
              <li>
                <a className="nav-link" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  BlOG
                </a>
              </li>
              <li>
                <a
                  className="nav-link btn btn-primary"
                  href={import.meta.env.VITE_RESUME_LINK}
                  target="_blank"
                >
                  RESUME <i className="fas fa-arrow-right"></i>
                </a>
              </li>

              {/* <!-- Toggle switch --> */}
              <div className="theme-switch">
                <input type="checkbox" id="switch" />
                <label className="toggle-icons" htmlFor="switch">
                  <img className="moon" src="assets/moon.svg" />
                  <img className="sun" src="assets/sun.svg" />
                </label>
              </div>
              {/* <!-- Hamburger menu --> */}
            </ul>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>

        <section className="header-container">
          <img className="profile-image" src="/profile-pic.png" alt="" />
          <h1>Hi I'm Sachin</h1>

          <div className="content-text">
            <h2>Developing software</h2>
            <h2>with impact, precision, and speed.</h2>

            <p>
              Passionate Computer Engineering graduate with expertise in
              full-stack development, including HTML, CSS, JavaScript, React.js,
              Node.js, Express.js and MongoDB.
            </p>
          </div>
          <div className="hero-btns">
            <a
              href="https://www.linkedin.com/in/sachinalam/"
              className="btn btn-secondary"
              target="_blank"
            >
              Connect With Me
            </a>

            <a
              href="https://github.com/sachin9998"
              className="btn btn-secondary"
              target="_blank"
            >
              {/* <FaGithub size={16} /> */}
              Github
            </a>
          </div>
        </section>
      </header>

      {/* <!-- Projects --> */}
      <section id="projects" className="project-container container">
        <div className="division"></div>
        <div className="content-text">
          <h2>Projects</h2>
          <p>Check out some of my personal and paid projects</p>
        </div>

        <article className="project">
          {/* <!-- Project 1 --> */}
          {/* <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project One</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div> */}

          {/* <!-- Project 2 -->
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Two</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div> */}

          {/* <!-- Porject 3 -->
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Three</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div> */}

          {/* <!-- Project 4 --> */}
          {/* <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Four</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div> */}

          {/* <!-- Project 5 --> */}
          {/* <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Five</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div> */}

          {/* <!-- Project 6 --> */}
          {/* <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Six</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div> */}
        </article>

        <a href="#" className="btn btn-secondary" target="_blank">
          See More <i className="fas fa-arrow-right"></i>
        </a>
      </section>

      <footer id="footer">
        <div className="container">
          {/* <a href="mailto:communitypro47@gmail.com">communitypro47@gmail.com</a> */}
          {/* <!-- Social links --> */}
          <div className="social">
            <a href="#" target="_blank">
              <img src="./assets/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src="./assets/twitter-icon.svg" alt="Twitter" />
            </a>
            <a href="#" target="_blank">
              <img src="./assets/linkedin-icon.svg" alt="Linkedin" />
            </a>
            <a href="#" target="_blank">
              <img src="./assets/github-icon.svg" alt="GitHub" />
            </a>
            {/* <a href="#" target="_blank"
            ><img src="./assets/hashnode-icon.svg" alt="Hashnode"
          /></a> */}
          </div>
          {/* <!-- Attribution --> */}
          {/* <div className="attribution">
          <a
            href="https://github.com/Sachin9998"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div> */}
          <p> Created with by Sachin Alam</p>
        </div>
      </footer>
    </>
  );
}

export default App;
