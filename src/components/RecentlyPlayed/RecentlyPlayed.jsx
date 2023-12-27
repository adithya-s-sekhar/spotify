import AlbumCard from '../AlbumCard/AlbumCard';
import './RecentlyPlayed.css';

const RecentlyPlayed = () => {
    const items = [{
        name: 'Revengers (Original Motion Picture Soundtrack)',
        albumart: 'albumart.jpg',
        artists: 'Hans Dimmer'
    },{
        name: 'SuperheroMovie 2: Revenge of Someone (Original Motion Picture Soundtrack)',
        albumart: 'albumart.jpg',
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