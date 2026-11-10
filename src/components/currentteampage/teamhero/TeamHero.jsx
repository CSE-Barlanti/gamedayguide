import "./TeamHero.css";

const TeamHero = () => {
    return(
        <section className="current-team-hero">
            <div className="current-team-banner">
                <div className="current-team-emblem">C</div>

                <div className="current-team-intro">
                    <h1>Meet The Gamecocks</h1>

                    <p>
                        Explore the athletes, leaders, and coaches who bring
                        energy to every Saturday in Columbia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TeamHero;