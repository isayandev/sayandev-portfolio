import AboutImg from "../Images/about-img.webp";
import RoundedText from "../Images/text2.svg";
import WorkingEmoji from "../Images/working-emoji.png";

export default function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Kolkata, India
                📍
              </h4>
              <p>
              As a Junior Front-End Developer, I bring a robust skill set encompassing HTML, CSS, JavaScript, React, Tailwind, and SCSS. My strength lies in creating and maintaining responsive websites that prioritize a seamless user experience. I specialize in designing dynamic and engaging interfaces by implementing clean and optimized code, utilizing the latest development tools, and leveraging cutting-edge techniques. I am dedicated to crafting visually appealing and functional web applications, and my collaborative nature shines when working with cross-functional teams. I am committed to staying updated on industry trends and technologies to contribute effectively to the creation of exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

