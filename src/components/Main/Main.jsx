import Navbar from '../Navbar/Navbar';
import './Main.css';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import AlbumDetails from '../AlbumDetails/AlbumDetails';
import { albums } from '../../albums';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Main = () => {
    return ( 
        <Router>
        <div className='main'>
          <Navbar />
            <Routes>
                <Route exact path = "/" element = { <Home albums = {albums} /> }/>
                <Route exact path = "/album/:id" element = { <AlbumDetails albums = {albums} /> }/>
            </Routes>
            <Footer />
        </div>
      </Router>
     );
}
 
export default Main;