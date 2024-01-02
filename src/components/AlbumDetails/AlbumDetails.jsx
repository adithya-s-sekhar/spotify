import { useParams } from "react-router-dom";
import './AlbumDetails.css';
import AlbumSong from '../AlbumSong/AlbumSong';
import { useContext } from "react";
import { CurrPlayingItemContext } from "../../contexts/CurrPlayingItemContext";

const AlbumDetails = (props) => {
    const { id } = useParams();
    const numericId = Number(id);
    const album = props.albums.find(({ id }) => id == numericId);

    const currPlayingItem = useContext(CurrPlayingItemContext);

    function playAlbum() {
        currPlayingItem.setCurrPlayingAlbum(album);
        currPlayingItem.setCurrPlayingSong(album.songs[0]);
    }

    return ( 
        <div className="album-details">
            <div className="album-header">
                <div className="album-header-art">
                    <img src={album.art} />
                </div>
                <div className="album-header-text">
                    <div className="album-header-category">
                        {album.category}
                    </div>
                    <div className="album-header-title">
                        {album.title}
                    </div>
                    <div className="album-header-details">
                        <div className="album-header-artist-image">
                                <img src={album.artistArt} />
                        </div>
                        <div className="album-header-summary">
                            {album.artist}&nbsp;&nbsp;•&nbsp;&nbsp;{album.year}&nbsp;&nbsp;•&nbsp;&nbsp;{(album.songs).length} songs
                        </div>
                    </div>
                </div>
            </div>
            <div className="album-body">
                <div className="album-body-controls">
                    <div className="album-body-controls-left">
                        <div className="album-body-controls-play" onClick={playAlbum}>
                            <svg viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                        </div>
                        <div className="album-body-controls-heart">
                            <svg viewBox="0 0 24 24"><path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path></svg>
                        </div>
                        <div className="album-body-controls-overflow">
                        <svg viewBox="0 0 24 24"><path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
                        </div>
                    </div>
                    <div className="album-body-controls-right">
                        <div className="album-body-controls-view">
                            <svg viewBox="0 0 16 16"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="album-body-songs">
                    <div className="album-body-songs-header">
                        <div className="album-body-songs-index-header">
                            #
                        </div>
                        <div className="album-body-songs-title-header">
                            Title
                        </div>
                        <div className="album-body-songs-dur-header">
                            <svg viewBox="0 0 16 16"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>
                        </div>
                    </div>
                    <div className="album-body-songs-list">
                        {album.songs.map((song, index) => (
                            <AlbumSong
                                key={index}
                                index={index}
                                songTitle={song.songTitle}
                                songArtist={song.songArtist}
                                songDur={song.songDur}
                                album={album}
                            />
                        ))}
                    </div>
                </div>
                <div className="album-rights">
                    <div>
                        {album.longDate}
                    </div>
                    <div>
                        {album.copyright}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AlbumDetails;