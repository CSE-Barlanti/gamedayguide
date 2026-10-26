import "./Home.css";

const Home = () => {
    return(
        <main>
            <section className ="home-hero">
                <div className ="hero-content">
                    <p className="hero-label">The Ultimate Fan Portal</p>

                    <h1>GameCock <br /> Game Day Guide</h1>
                    <p className="hero-description">
                        Your Ultimate Guide to South Carolina Football
                        Saturdays. From Williams-Brice tailgate spots to the
                        legendary SandStorm.
                    </p>

                    <div className="hero-buttons">
                        <a className="hero-button" href="#">
                            Explore Game Day →
                        </a>
                        <a className="hero-button" href="#">
                            View Schedule
                        </a>
                    </div>


                </div>
            </section>
            <section className = "countdown-section">
                <div className="team">
                    <div className="team-symbol gamecock-symbol">SC</div>
                    <h3>GAMECOCKS</h3>
                </div>

                <p className="versus">VS</p>

                <div className="team">
                    <div className="team-symbol alabama-symbol">AL</div>
                    <h3>ALABAMA</h3>
                 </div>
            </section>
        </main>
    );
        
};

export default Home;
