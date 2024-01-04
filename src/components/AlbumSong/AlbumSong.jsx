import { useContext, useEffect } from 'react';
import './AlbumSong.css';
import { CurrPlayingItemContext } from '../../contexts/CurrPlayingItemContext';

const AlbumSong = ({index, songTitle, songArtist, songDur, album}) => {
    const currPlayingItem = useContext(CurrPlayingItemContext);

    function playSong() {
        currPlayingItem.setIsPlaying(false);
        currPlayingItem.setCurrPlayingAlbum(album);
        currPlayingItem.setCurrPlayingSong(album.songs[index]);
        currPlayingItem.setIsPlaying(true);
    }

    function pauseSong() {  
        currPlayingItem.setIsPlaying(false);
    }

    function togglePlay(){
        if (currPlayingItem.isPlaying){
            if (currPlayingItem.currPlayingSong.songIndex === (index + 1)){
                pauseSong();
            } else {
                playSong();
            }
        } else {
            playSong();
        }
    }

    let element = document.getElementById(index+1);
    if (currPlayingItem.currPlayingAlbum === album && currPlayingItem.currPlayingSong.songIndex === (index + 1)){
        element.classList.add('album-body-song-active');
    } else {
        element.classList.remove('album-body-song-active');
    }

    return (
        <div className="album-body-song" id={index+1} onClick={togglePlay}>
            <div className="album-body-song-index">
                {index + 1}
            </div>
            <div className="album-body-song-details">
                <div className="album-body-song-title">
                    {songTitle}
                </div>
                <div className="album-body-song-artist">
                    {songArtist}
                </div>
            </div>
            <div className="album-body-song-dur">
                {songDur}
            </div>
        </div>
    );
}

export default AlbumSong;
