import './AlbumCard.css';

const AlbumCard = (props) => {
    const album = props.album;

    return ( 
        <div className="album-card">
            <div className="album-card-art">
                <img src={album.albumart} />
            </div>
            <div className='album-card-details'>
                <div className="album-card-title">
                    {album.name}
                </div>
                <div className="album-card-artists">
                    {album.artists}
                </div>
            </div>
        </div>
     );
}
 
export default AlbumCard;