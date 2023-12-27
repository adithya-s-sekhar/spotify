import AlbumCard from '../AlbumCard/AlbumCard';
import './AlbumRow.css';

const AlbumRow = (props) => {
    const rowHeader = props.header;
    const items = props.items;

    return ( 
        <div className="album-row">
            <div className="album-row-header">
                {rowHeader}
            </div>
            <div className="album-row-cards">
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
 
export default AlbumRow;