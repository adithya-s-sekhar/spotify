import './AlbumSong.css';

const AlbumSong = ({index, songTitle, songArtist, songDur, album}) => {
    return (
        <div className="album-body-song">
            <div className="album-body-song-index">
                {index}
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
