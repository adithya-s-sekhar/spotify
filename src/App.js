import './App.css';
import NavBox from './components/NavBox/NavBox';
import NowPlaying from './components/NowPlaying/NowPlaying';
import YourLibrary from './components/YourLibrary/YourLibrary';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AlbumDetails from './components/AlbumDetails/AlbumDetails';
import { albums } from './albums';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <div className='app-wrapper'>
        <NavBox />
        <YourLibrary />
        <div className='main'>
          <Navbar />
            <Routes>
                <Route exact path = "/" element = { <Home albums = {albums} /> }/>
                <Route exact path = "/album/:id" element = { <AlbumDetails albums = {albums} /> }/>
            </Routes>
          <Footer />
        </div>
        {/* <NowPlaying /> */}
        <NowPlaying
          album = {albums[0]}
          song = {albums[0].songs[0]}
        />
        {/* temporarily for testing */}
      </div>
    </div>
    </Router>
  );
}

export default App;
