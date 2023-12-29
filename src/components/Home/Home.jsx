import './Home.css';
import AlbumRow from '../AlbumRow/AlbumRow';
import { recentlyPlayed,madeForYou } from '../../albums';

const Home = () => {

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