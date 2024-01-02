import { useContext } from 'react';
import NowPlayingItem from '../NowPlayingItem/NowPlayingItem';
import './NowPlaying.css';
import { CurrPlayingItemContext } from '../../contexts/CurrPlayingItemContext';
import NowPlayingMainControls from '../NowPlayingMainControls/NowPlayingMainControls';
import NowPlayingAuxControls from '../NowPlayingAuxControls/NowPlayingAuxControls';

const NowPlaying = () => {
    const currPlayingItem = useContext(CurrPlayingItemContext);

    return ( 
        <div className='now-playing'>
            <NowPlayingItem
                item = {currPlayingItem}
            />
            <NowPlayingMainControls />
            <NowPlayingAuxControls />
        </div>
     );
}
 
export default NowPlaying;