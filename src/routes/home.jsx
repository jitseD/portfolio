import img1 from "../assets/img/me-1.png";
import img2 from "../assets/img/me-2.png";

const Home = () => {
    return (
        <main className="main main--home">
            <section className="header">
                <h1 className="header__title">
                    <span className="title__section">Digital <span className="emph">Designer</span></span>
                    <span className="visually-hidden">and</span>
                    <span className="title__section">Creative <span className="emph">Developer</span></span>
                </h1>
                <div className="header__imgs">
                    <img className="header__img" src={img1} alt="Jitse Dekeyser" />
                    <img className="header__img" src={img2} alt="Jitse Dekeyser" />
                </div>
            </section>
        </main >
    )
}

export default Home;