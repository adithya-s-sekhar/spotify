import { Link } from 'react-router-dom';
import './AlbumCard.css';
import { useContext } from 'react';
import { CurrPlayingItemContext } from '../../contexts/CurrPlayingItemContext';

const AlbumCard = ({album}) => {
    const currPlayingItem = useContext(CurrPlayingItemContext);

    function playAlbum() {
        currPlayingItem.setIsPlaying(false);
        currPlayingItem.setCurrPlayingAlbum(album);
        currPlayingItem.setCurrPlayingSong(album.songs[0]);
        currPlayingItem.setIsPlaying(true);
    }

    function pauseAlbum() {
        currPlayingItem.setIsPlaying(false);
    }

    function togglePlay(){
        if (currPlayingItem.isPlaying && currPlayingItem.currPlayingAlbum === album){
            pauseAlbum();
        } else {
            playAlbum();
        }
    }

    return (   
            <div className="album-card">
                <div className="album-card-art">
                    <Link to = {`/album/${ album.id }`}>  
                    <img 
                        src={album.art} 
                        style={{
                            opacity: (currPlayingItem.isPlaying && currPlayingItem.currPlayingAlbum === album) ? '1' : '.7'
                        }}
                    />
                    </Link>
                    <svg viewBox="0 0 24 24" onClick={togglePlay} style={{
                        opacity: (currPlayingItem.isPlaying && currPlayingItem.currPlayingAlbum === album) ? '1' : '0',
                        bottom: (currPlayingItem.isPlaying && currPlayingItem.currPlayingAlbum === album) ? '8%' : '0'
                    }}>
                        {!currPlayingItem.isPlaying | currPlayingItem.currPlayingAlbum !== album && <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>}
                        {currPlayingItem.isPlaying && currPlayingItem.currPlayingAlbum === album && <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>}
                    </svg>
                </div>
                <Link to = {`/album/${ album.id }`}>  
                    <div className='album-card-details'>
                        <div className="album-card-title">
                            {album.title}
                        </div>
                        <div className="album-card-artists">
                            {album.artist}
                        </div>
                    </div>
                </Link>
            </div>
     );
}
 
export default AlbumCard;