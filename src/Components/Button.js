import propTypes from "prop-types";

const Button = ({color, text ,onClick}) => {
    return ( 
        <button 
        onClick={onClick}
        style={{backgroundColor: color}} 
        className='btn'>
            {text}
        </button>
     );
}
Button.defaultProps = {
    text: 'button' ,
    color: 'black' 
}

Button.propTypes  = {
    text : propTypes.string.isRequired ,
    color : propTypes.string.isRequired ,
    onClick: propTypes.func,
}
 
export default Button;