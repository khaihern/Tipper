import Banner from './images/Banner.svg';
import Head from './components/Head';
import Overview from './components/Overview';
import Amount from './components/Amount';
import Tip from './components/Tip';
import PartySize from './components/PartySize';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <div className="App">
      <img src={Banner} alt="Banner" className="banner" />
      <div className="side-margin">
        <GlobalProvider>
          <Head />
          <Overview />
          <Amount />
          <Tip />
          <PartySize />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
