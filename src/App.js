import TotalInfo from "./components/TotalInfo/TotalInfo";
import Header from "./components/Header/Header";
import MatchResults from "./components/MatchResults/MatchResults";
import WeekNavigation from "./components/WeekNavigation/WeekNavigation";
import Aside from "./components/Aside/Aside";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="main">
            <section>
              <TotalInfo />
              <MatchResults />
              <WeekNavigation />
            </section>
            <Aside />
        </main>
    </div>
  );
}

export default App;
