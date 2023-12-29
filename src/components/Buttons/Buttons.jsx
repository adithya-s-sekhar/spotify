import './Buttons.css';

export const IconWithText = (props) => {
    const icon_svg = props.icon;
    const icon_text = props.text;

    return ( 
        <div className='icon-with-text'>
            <div className='icon-with-text-svg'>
                {icon_svg}
            </div>
            <div className='icon-with-text-text'>
                {icon_text}
            </div>
        </div>
     );
}

export const Icon = (props) => {
const icon_svg = props.icon;

    return ( 
        <div className='icon' onClick={props.onClick}>
            <div className='icon-svg'>
                {icon_svg}
            </div>
        </div>
     );
}

export const Button = (props) => {
    const text = props.text;

    return ( 
        <div className='button'>
            <div className='button-text'>
                {text}
            </div>
        </div>
     );
}

export const ButtonWithIcon = (props) => {
    const icon = props.icon;
    const text = props.text;
    const extraClass = props.class;

    return ( 
        <div className={`button-with-icon ${extraClass}`}>
            <div className='button-with-icon-svg'>
                {icon}
            </div>
            <div className='button-with-icon-text'>
                {text}
            </div>
        </div>
     );
}
