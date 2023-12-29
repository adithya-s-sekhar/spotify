import './AlbumDetails.css';

const AlbumDetails = (props) => {
    const album = props.album;

    return ( 
        <div className="album-details">
            <div className="album-header">
                <div className="album-header-art">
                    <img src={album.albumart} />
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
                            <div className="artist-image-mask">
                                <img src={album.artistart} />
                            </div>
                        </div>
                        <div className="album-header-summary">
                            {album.artist} • {album.year} • {(album.songs).length}
                        </div>
                    </div>
                </div>
            </div>
            <div className="album-body">

            </div>
            <div className="album-footer">
                {album.longDate}
                {album.copyright}
            </div>
        </div>
     );
}
 
export default AlbumDetails;