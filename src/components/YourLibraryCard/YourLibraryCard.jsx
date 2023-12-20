import './YourLibraryCard.css';

const YourLibraryCard = (props) => {
    const heading = props.heading;
    const text = props.text;
    const Action = props.action;

    return ( 
        <div className='your-library-card'>
            <div className='your-library-card-text'>
                <div className='your-library-card-text-heading'>
                    {heading}
                </div>
                <div className='your-library-card-text-text'>
                    {text}
                </div>
            </div>
            <div className='your-library-card-action'>
                {Action}
            </div>
        </div>
     );
}
 
export default YourLibraryCard;