import "./Hero.css"
import heroImg from "../../images/illustration-devices.svg"

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero__container">
            <img src={heroImg} className="hero-img" alt="Illustration devices" />

            <div className="hero__texts">
                <p className="hero__texts-subtitle">
                    <span>NEW</span> Monograph Dashboard
                </p>
                <h1 className="hero__texts-title">Powerfull insights into your team</h1>
                <p className="hero__texts-paragraph">Project plannig and time tracking for agile teams</p>

                <div className="hero__texts__btns">
                    <button type="button" className="hero__texts__btns-btn hero__texts__btns-btn--red">Schedule a demo</button>
                    <button type="button" className="hero__texts__btns-btn">To see a preview</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero