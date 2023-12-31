import { useContext, useEffect } from 'react';
import './NowPlayingMainControls.css';
import { CurrPlayingItemContext } from '../../contexts/CurrPlayingItemContext';

const NowPlayingMainControls = () => {
    const currPlayingItem = useContext(CurrPlayingItemContext);

    function togglePlay() {
        if (currPlayingItem.isPlaying) {
            currPlayingItem.setIsPlaying(false);
        } else {
            currPlayingItem.setIsPlaying(true);
        }
    }

    const formatTime = (x) => {
        const min = Math.floor(x / 60);
        const sec = Math.floor(x % 60);

        const formattedMin = min < 10 ? `0${min}` : min;
        const formattedSec = sec < 10 ? `0${sec}` : sec;

        return(
            `${formattedMin}:${formattedSec}`
        )
    }

    const prevTrack = () => {
        let newIndex = currPlayingItem.currPlayingSong.songIndex - 1;
        if (!newIndex > 0) {
            const prevSongIndex = (currPlayingItem.currPlayingAlbum.songs.length - 1);
            const prevSong = currPlayingItem.currPlayingAlbum.songs[prevSongIndex];
            currPlayingItem.setCurrPlayingSong(prevSong);
        } else {
            const prevSong = currPlayingItem.currPlayingAlbum.songs.find(({ songIndex }) => songIndex === newIndex);
            currPlayingItem.setCurrPlayingSong(prevSong);
        }
    }

    const nextTrack = () => {
        let newIndex = currPlayingItem.currPlayingSong.songIndex + 1;
        if (newIndex > currPlayingItem.currPlayingAlbum.songs.length) {
            const nextSong = currPlayingItem.currPlayingAlbum.songs[0];
            currPlayingItem.setCurrPlayingSong(nextSong);
        } else {
            const nextSong = currPlayingItem.currPlayingAlbum.songs.find(({ songIndex }) => songIndex === newIndex);
            currPlayingItem.setCurrPlayingSong(nextSong);
        }
    }

    const width = (currPlayingItem.currentDur / currPlayingItem.duration) * 100;
    const progressBarFg = document.getElementsByClassName('np-progress-bar-fg')[0];
    if (progressBarFg) {
        progressBarFg.style.width = `${width}%`;
    }

    useEffect(() => {
        if (currPlayingItem.currentDur === currPlayingItem.duration){
            nextTrack();
        }
    },[currPlayingItem.currentDur])

    return ( 
        <div className="np-main-controls">
            <div className="np-playback-controls">
                <svg viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>
                <svg viewBox="0 0 16 16" onClick={prevTrack}><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
                <svg viewBox="0 0 16 16" className="play-pause-button" onClick={togglePlay}
                style={{
                    opacity: currPlayingItem.isPlaying ? '1' : '.7'
                }}>
                    {!currPlayingItem.isPlaying && <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>}
                    {currPlayingItem.isPlaying && <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>}
                </svg>
                <svg viewBox="0 0 16 16" onClick={nextTrack}><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
                <svg viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
            </div>
            <div className="np-progress">
                <div className="np-curr-dur">
                {currPlayingItem.isPlaying && formatTime(currPlayingItem.currentDur)}
                </div>
                <div className="np-progress-bar">
                    <div className="np-progress-bar-fg">
                    </div>
                </div>
                <div className="np-total-dur">
                    {currPlayingItem.isPlaying && formatTime(currPlayingItem.duration)}
                </div>
            </div>
        </div>
     );
}
 
export default NowPlayingMainControls;