import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home () {
    return(
        <>
            <Navbar/>
            <Hero />
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}