import { useContext } from 'react';
import './AlbumSong.css';
import { CurrPlayingItemContext } from '../../contexts/CurrPlayingItemContext';

const AlbumSong = ({index, songTitle, songArtist, songDur, album}) => {
    const currPlayingItem = useContext(CurrPlayingItemContext);

    function changeSong() {
        currPlayingItem.setCurrPlayingAlbum(album);
        currPlayingItem.setCurrPlayingSong(album.songs[index]);
    }

    return (
        <div className="album-body-song" onClick={changeSong}>
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
