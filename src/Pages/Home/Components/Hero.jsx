import Waving from "../Images/waving.png"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,ts",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=react,next",
      id: 3,
    },
    {
      img: "https://skillicons.dev/icons?i=tailwind,scss",
      id: 4,
    },
  ];

export default function Hero() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container">
                <div className="content">
                    <div className="hero-main">
                    <div className="hero-text">
                        <h1>Front-End React Developer</h1>
                        <img src={Waving} alt="waving_hand" />
                        <p>
                        Hi, I'm Sayan Gupta. A passionate Front-end React
                        Developer based in Kolkata, India. 📍
                        </p>
                        <span>
                        <a
                            aria-label="linkedin"
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/sayan-gupta-1153681a4/"
                        >
                            <IconBrandLinkedin width={32} height={32} />
                        </a>
                        <a
                            aria-label="github"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/isayandev/"
                        >
                            <IconBrandGithub width={32} height={32} />
                        </a>
                        </span>
                    </div>

                    <div className="hero-img"></div>
                    </div>

                    {/*  */}
                    <div className="skills">
                    <p>Tech Stack</p>
                    <div className="logos">
                        <ul>
                        {skillsIcons.map((icon) => (
                            <li key={icon.id}>
                            <img src={icon.img} alt="skill-icon" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}