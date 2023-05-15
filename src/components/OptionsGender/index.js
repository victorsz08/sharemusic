import './OptionsGender.css'



const OptionsGender = (props) => {
    return(
        <div className='select-options'>
            <label>{props.option}</label>
            <select onChange={e => props.changeDigit(e.target.value)} value={props.valor} required={true}>
                <option value=""></option>
                {props.genders.map(gender => {
                return <option key={gender}>{gender}</option>
                })}
            </select>
        </div>
    );
}

export default OptionsGender