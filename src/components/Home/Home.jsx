import './Home.css';
import AlbumRow from '../AlbumRow/AlbumRow';

const Home = (props) => {
    const albums = props.albums;

    return ( 
        <div className="home">
            <AlbumRow 
                header = "Recently Played"
                items = {albums}
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