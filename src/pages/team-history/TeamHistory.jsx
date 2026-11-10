import HistoryHero from "../../components/teamhistorypage/historyhero/HistoryHero";
import MilestoneSection from "../../components/teamhistorypage/milestonesection/MilestoneSection";
import LegendSection from "../../components/teamhistorypage/legendsection/LegendSection";
import HistoryCta from "../../components/teamhistorypage/historycta/HistoryCta";

const TeamHistory = () => {
    return(
        <main>
            <HistoryHero />
            <MilestoneSection />
            <LegendSection />
            <HistoryCta />
        </main>
    );
};

export default TeamHistory;