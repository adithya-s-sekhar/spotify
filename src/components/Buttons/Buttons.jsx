import './Buttons.css';

export const IconWithText = (props) => {
    const icon_svg = props.icon;
    const icon_text = props.text;

    return ( 
        <div className='icon-with-text'>
            <div className='icon-svg'>
                {icon_svg}
            </div>
            <div className='icon-text'>
                {icon_text}
            </div>
        </div>
     );
}