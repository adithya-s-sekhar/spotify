import Navbar from '../Navbar/Navbar';
import AlbumRow from '../AlbumRow/AlbumRow';
import './Main.css';

const Main = () => {
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
        <div className='main'>
            <Navbar />
            <AlbumRow 
                header = "Recently Played"
                items = {items}
            />
        </div>
     );
}
 
export default Main;