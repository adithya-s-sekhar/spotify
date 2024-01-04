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
import { useState, useEffect, useRef } from 'react';
import { CurrPlayingItemContext } from './contexts/CurrPlayingItemContext';
import { AlbumContext } from './contexts/AlbumContext';

function App() {
  const initAlbum = albums[0];
  const initSong = initAlbum.songs[0];
  const [currPlayingAlbum, setCurrPlayingAlbum] = useState(initAlbum);
  const [currPlayingSong, setCurrPlayingSong] = useState(initSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(initSong.songFile));
  const [currentDur, setCurrentDur] = useState(0);
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    const updateAudioPlayer = () => {
      if (isPlaying) {
        setDuration(audioRef.current.duration)
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    };

    audioRef.current.src = currPlayingSong.songFile;
    // audioRef.current.addEventListener('loadedmetadata',() => {
    //   setDuration(audioRef.current.duration);
    //   updateAudioPlayer();
    // });
    // audioRef.current.addEventListener('loadedmetadata', );
    audioRef.current.addEventListener('loadedmetadata', updateAudioPlayer);

    // audioRef.current.addEventListener('timeupdate', () => {
    //   setCurrentDur(audioRef.current.currentTime);
    // });

    audioRef.current.addEventListener('timeupdate', () => {setCurrentDur(audioRef.current.currentTime)});

    // audioRef.current.addEventListener('timeupdate', console.log('event'));

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.removeEventListener('loadedmetadata', updateAudioPlayer);
      // audioRef.current.removeEventListener('timeupdate', () => {
      //   setCurrentDur(audioRef.current.currentTime);
      // });
      audioRef.current.removeEventListener('timeupdate', setCurrentDur(audioRef.current.currentTime));
    };
  }, [isPlaying, currPlayingSong]);
  
  return (
    <AlbumContext.Provider value={{albums}}>
      <CurrPlayingItemContext.Provider value={{
      currPlayingAlbum, setCurrPlayingAlbum, 
      currPlayingSong, setCurrPlayingSong,
      isPlaying, setIsPlaying,
      currentDur, duration
      }}>
      <Router>
        <div className="app">
          <div className='app-wrapper'>
            <NavBox />
            <YourLibrary />
            <div className='main'>
              <Navbar />
              <Routes>
                <Route exact path = "/" element = { <Home/> }/>
                <Route exact path = "/album/:id" element = { <AlbumDetails/> }/>
              </Routes>
              <Footer />
            </div>
            <NowPlaying/>
          </div>
        </div>
      </Router>
    </CurrPlayingItemContext.Provider>
    </AlbumContext.Provider>
  );
}

export default App;
