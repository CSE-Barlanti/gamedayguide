import "./RecentResults.css";
import ResultCard from "../resultcard/ResultCard";

const RecentResults = () => {
    return(
        <section className="results-section">
            <p className="results-label">SEASON RESULTS</p>
            <h2>Recent Results</h2>

            <div className="results-list">
                <ResultCard
                    date="August 29, 2026"
                    score="South Carolina 31 — 17 Coastal Carolina"
                    outcome="win"
                    letter="W"
                />
                <ResultCard
                    date="September 5, 2026"
                    score="South Carolina 24 — 20 Clemson"
                    outcome="win"
                    letter="W"
                />
                <ResultCard
                    date="September 12, 2026"
                    score="South Carolina 21 — 27 LSU"
                    outcome="loss"
                    letter="L"
                />
            </div>
        </section>
    );
};

export default RecentResults;