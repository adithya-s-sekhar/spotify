import { IconWithText, Icon, Button } from '../Buttons/Buttons';
import YourLibraryCard from '../YourLibraryCard/YourLibraryCard';
import './YourLibrary.css';

const YourLibrary = () => {
    const library_svg = <svg viewBox="0 0 24 24"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>

    const plus_svg = <svg viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>

    const arrow_svg = <svg viewBox="0 0 16 16"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg>

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
                    <Icon
                        icon = {plus_svg}
                    />
                    <Icon
                        icon = {arrow_svg}
                    />
                </div>
            </div>
            <div className='your-library-content'>
                <YourLibraryCard
                    heading = 'Create your first playlist'
                    text = 'It&apos;s easy, we&apos;ll help you'
                    action = {<Button
                                text = 'Create playlist'
                            />}
                />
                <YourLibraryCard
                    heading = 'Let&apos;s find some podcasts to follow'
                    text = 'We&apos;ll keep you updated on new episodes'
                    action = {<Button
                                text = 'Browse podcasts'
                            />}
                />
            </div>
        </div>
     );
}
 
export default YourLibrary;