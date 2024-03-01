import './App.css';
import BoardSection from './Board.js';
import CollabSection from './Collab.js';
import HeaderSection from "./HeaderSection.js";
import MainSection from './MainSection.js';
import MissionSection from './MissionSection.js';
import PartnerSection from './Partners.js';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <MainSection />
      <MissionSection />
      <CollabSection />
      <BoardSection />
      <PartnerSection />
    </div>
  );
}

export default App;
