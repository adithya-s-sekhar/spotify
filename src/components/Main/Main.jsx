import Navbar from '../Navbar/Navbar';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import './Main.css';

const Main = () => {
    return ( 
        <div className='main'>
            <Navbar />
            <RecentlyPlayed />
        </div>
     );
}
 
export default Main;