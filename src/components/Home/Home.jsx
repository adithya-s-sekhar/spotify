import './Home.css';
import AlbumRow from '../AlbumRow/AlbumRow';
import { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext';

const Home = () => {
    const albums = (useContext(AlbumContext).albums);
    const recentlyPlayed = albums.filter((album) => album.recent === true);

    return ( 
        <div className="home">
            <AlbumRow 
                header = "Recently Played"
                items = {recentlyPlayed}
            />
            <AlbumRow 
                header = "Made For You"
                items = {albums}
            />
            <AlbumRow 
                header = "Popular albums"
                items = {albums}
            />
            <AlbumRow 
                header = "Discover picks for you"
                items = {albums}
            />
        </div>
     );
}
 
export default Home;