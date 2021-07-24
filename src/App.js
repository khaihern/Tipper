import Banner from './images/Banner.svg';
import Head from './components/Head';
import Overview from './components/Overview';
import Amount from './components/Amount';
import Tip from './components/Tip';
import NumberOfPeople from './components/NumberOfPeople';

function App() {
  return (
    <div className="App">
      <img src={Banner} alt="Banner" />
      <div className="side-margin">
        <Head />
        <Overview />
        <Amount />
        <Tip />
        <NumberOfPeople />
      </div>
    </div>
  );
}

export default App;
