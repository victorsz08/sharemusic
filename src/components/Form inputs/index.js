import './DataMusic.css'


const DataMusic = (props) => {




const changeDigit = (e) => {
   props.changeOn(e.target.value);
}

    return (
        <section className='form-data'>
            <label>{props.label}</label>
            <input value={props.valor} 
            onChange={changeDigit} 
            required={true} 
            placeholder={props.placeholder}/>
        </section>
    );
}

export default DataMusic