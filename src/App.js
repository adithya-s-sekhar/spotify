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
import { useEffect, useState } from 'react';
import { CurrPlayingItemContext } from './contexts/CurrPlayingItemContext';

function App() {
  const initAlbum = albums[0];
  const initSong = initAlbum.songs[0];
  const [currPlayingAlbum, setCurrPlayingAlbum] = useState(initAlbum);
  const [currPlayingSong, setCurrPlayingSong] = useState(initSong);
  const [isPlaying, setIsPlaying] = useState(false);

  const currTrack = new Audio(currPlayingSong.songFile);

  isPlaying ? currTrack.play() : currTrack.pause();
  
  return (
    <CurrPlayingItemContext.Provider value={{
      currPlayingAlbum, setCurrPlayingAlbum, 
      currPlayingSong, setCurrPlayingSong,
      isPlaying, setIsPlaying,
      }}>
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
            <NowPlaying/>
          </div>
        </div>
      </Router>
    </CurrPlayingItemContext.Provider>
  );
}

export default App;
