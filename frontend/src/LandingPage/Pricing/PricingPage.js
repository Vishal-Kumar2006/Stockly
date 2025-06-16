import Hero from "./Hero";
import Brockerage from "./Brockerage";
import OpenAccount from "../OpenAccount";

function AboutPage() {
  return (
    <div className="container">
        <Hero/>
        <OpenAccount/>
        <Brockerage/>
    </div>
  );
}

export default AboutPage;