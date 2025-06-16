import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education"
import Footer from "../Footer"

function HomePage() {
    return (
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
      );
}

export default HomePage;