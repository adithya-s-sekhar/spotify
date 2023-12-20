import { IconWithText } from '../Buttons/Buttons';
import './YourLibrary.css';

const YourLibrary = () => {
    const library_svg = <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 iYxpxA"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>

    return ( 
        <div className='your-library'>
            <div className='your-library-header'>
                <div className='your-library-header-button'>
                    <IconWithText
                        icon = {library_svg}
                        text = 'Your Library'
                    />
                </div>
                <div className='your-library-header-icons'>
                    
                </div>
            </div>
        </div>
     );
}
 
export default YourLibrary;