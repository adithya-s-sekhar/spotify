import { Link } from 'react-router-dom';
import './AlbumCard.css';

const AlbumCard = (props) => {
    const album = props.album;

    return ( 
        <Link to = {`/album/${ album.id }`}>    
            <div className="album-card">
                <div className="album-card-art">
                    <img src={album.art} />
                    <svg viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                </div>
                <div className='album-card-details'>
                    <div className="album-card-title">
                        {album.title}
                    </div>
                    <div className="album-card-artists">
                        {album.artist}
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default AlbumCard;