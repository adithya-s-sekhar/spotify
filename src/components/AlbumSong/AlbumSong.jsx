import { useContext, useEffect } from 'react';
import './AlbumSong.css';
import { CurrPlayingItemContext } from '../../contexts/CurrPlayingItemContext';

const AlbumSong = ({index, songTitle, songArtist, songDur, album}) => {
    const currPlayingItem = useContext(CurrPlayingItemContext);

    function playSong() {
        let element = document.getElementsByClassName('album-body-song-active')[0];
        if (element) {element.classList.remove("album-body-song-active")}
        currPlayingItem.setIsPlaying(false);
        currPlayingItem.setCurrPlayingAlbum(album);
        currPlayingItem.setCurrPlayingSong(album.songs[index]);
        currPlayingItem.setIsPlaying(true);
        if ((index+1) == currPlayingItem.currPlayingSong.songIndex){
            let element = document.getElementsByClassName('song'+(index+1))[0];
            element.classList.add("album-body-song-active");
        }
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

    useEffect(() => {
        if ((index+1) == currPlayingItem.currPlayingSong.songIndex){
            let element = document.getElementsByClassName('song'+(index+1))[0];
            element.classList.add("album-body-song-active");
        }
    },[currPlayingItem.currPlayingSong])

    return (
        <div className={`album-body-song song` + (index+1)} onClick={togglePlay}>
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
