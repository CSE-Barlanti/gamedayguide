import ScheduleHero from "../../components/schedule&resultspage/schedulehero/ScheduleHero";
import UpcomingGames from "../../components/schedule&resultspage/upcominggames/UpcomingGames";
import RecentResults from "../../components/schedule&resultspage/recentresults/RecentResults";
import GameDayCta from "../../components/schedule&resultspage/gamedaycta/GameDayCta";


const Schedule = () => {
    return(
        <main>
            <ScheduleHero />
            <UpcomingGames />
            <RecentResults />
            <GameDayCta />
        </main>
    );
};

export default Schedule;