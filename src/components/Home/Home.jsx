import './Home.css';
import AlbumRow from '../AlbumRow/AlbumRow';

const Home = () => {
    const recentlyPlayed = [
        {
            name: 'Revengers (Original Motion Picture Soundtrack)',
            albumart: 'albumart.jpg',
            artists: 'Hans Dimmer'
        },
        {
            name: 'SuperheroMovie 2: Revenge of Someone (Original Motion Picture Soundtrack)',
            albumart: 'albumart.jpg',
            artists: 'Various Artists'
        }
    ]

    const madeForYou = [
        {
            name: 'Galactic Odyssey',
            albumart: 'albumart.jpg',
            artists: 'Stellar Ensemble'
        },
        {
            name: 'Lost in Time',
            albumart: 'albumart.jpg',
            artists: 'Chrono Wave'
        },
        {
            name: 'Epic Journeys',
            albumart: 'albumart.jpg',
            artists: 'Quest Soundtrack'
        },
        {
            name: 'City Lights',
            albumart: 'albumart.jpg',
            artists: 'Urban Grooves Collective'
        },
        {
            name: 'Voyage to the Unknown',
            albumart: 'albumart.jpg',
            artists: 'Mystery Explorers'
        },
        {
            name: 'Serenade of the Stars',
            albumart: 'albumart.jpg',
            artists: 'Celestial Harmony Orchestra'
        },
        {
            name: 'Dreamscapes',
            albumart: 'albumart.jpg',
            artists: 'Somnolent Symphony'
        },
        {
            name: 'Rhythms of the Cosmos',
            albumart: 'albumart.jpg',
            artists: 'Cosmic Percussionists'
        }
    ]

    return ( 
        <div className="home">
            <AlbumRow 
                header = "Recently Played"
                items = {recentlyPlayed}
            />
            <AlbumRow 
                header = "Made For You"
                items = {madeForYou}
            />
            <AlbumRow 
                header = "Popular albums"
                items = {madeForYou}
            />
            <AlbumRow 
                header = "Discover picks for you"
                items = {madeForYou}
            />
        </div>
     );
}
 
export default Home;