import './App.css';
import Main from './components/Main/Main';
import NavBox from './components/NavBox/NavBox';
import NowPlaying from './components/NowPlaying/NowPlaying';
import YourLibrary from './components/YourLibrary/YourLibrary';

function App() {
  return (
    <div className="app">
      <div className='app-wrapper'>
        <NavBox />
        <YourLibrary />
        <Main />
        <NowPlaying />
      </div>
    </div>
  );
}

export default App;
