import './Button.css'




const ButtonOp = (props) => {
    return (
        <button  className='button-add'>
            {props.children}
        </button>
    );
}

export default ButtonOp