import "./MilestoneSection.css";
import MilestoneCard from "../milestonecard/MilestoneCard";

const MilestoneSection = () => {
    return(
        <section className="milestones-section">
            <h2>GameCock Football Milestones</h2>
            <p className="milestones-intro">
                Four defining seasons in Gamecock football history.
            </p>

            <div className="milestone-cards">
                <MilestoneCard year="1892" title="First Football Season" />
                <MilestoneCard year="1969" title="ACC Season Champions" />
                <MilestoneCard year="1980" title="First Heisman Winner: George Rogers" />
                <MilestoneCard year="2010" title="SEC East Champions" />
            </div>
        </section>
    );
};

export default MilestoneSection;