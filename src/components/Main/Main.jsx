import Navbar from '../Navbar/Navbar';
import './Main.css';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import AlbumDetails from '../AlbumDetails/AlbumDetails';
import { recentlyPlayed } from '../../albums';

const Main = () => {
    return ( 
        <div className='main'>
            <Navbar />
            {/* <Home /> */}
            <AlbumDetails
                album = {recentlyPlayed[0]}
            />
            <Footer />
        </div>
     );
}
 
export default Main;