import Navbar from '../Navbar/Navbar';
import './Main.css';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Main = () => {
    return ( 
        <div className='main'>
            <Navbar />
            <Home />
            <Footer />
        </div>
     );
}
 
export default Main;