import AlbumCard from '../AlbumCard/AlbumCard';
import './RecentlyPlayed.css';

const RecentlyPlayed = () => {
    const items = [{
        name: 'Theri (Original Motion Picture Soundtrack)',
        albumart: 'Theri_soundtrack_album.jpg',
        artists: 'G. V. Prakash'
    },{
        name: 'Kaththi (Original Motion Picture Soundtrack',
        albumart: 'Kaththi_soundtrack_cover.jpg',
        artists: 'Various Artists'
    }]

    return ( 
        <div className="recently-played">
            <div className="recently-played-header">
                Recently Played
            </div>
            <div className="recently-played-cards">
                {items && items.map((item, index) =>
                    <AlbumCard
                        album = {item}
                        key = {index}
                    />
                )}
            </div>
        </div>
     );
}
 
export default RecentlyPlayed;