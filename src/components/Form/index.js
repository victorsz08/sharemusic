import { useState } from 'react';
import ButtonOp from '../Button';
import DataMusic from '../Form inputs';
import OptionsGender from '../OptionsGender';
import './Form.css'




const Form = (props) => {

    const [name, setName] = useState('')
    const [artist, setArtist] = useState('')
    const [spotify, setSpotify] = useState('')
    const [youtube, setYoutube] = useState('')

    const [gender, setGender] = useState('')


    const saveForm = (e) => {
        e.preventDefault();
        props.musicAdd({
            name,
            artist,
            spotify,
            youtube,
            gender
        })
        setName('')
        setArtist('')
        setSpotify('')
        setYoutube('')
        setGender('')
    }


    return (
        <section className='form'>
            <form onSubmit={saveForm}>
                <h1>Compartilhe uma musica</h1>
                <DataMusic 
                label='Nome' 
                placeholder='Digite o nome da musica'
                valor={name}
                changeOn={valor => setName(valor)}
                />

                <DataMusic 
                label='Artísta' 
                placeholder='Digite o nome do artísta'
                valor={artist}
                changeOn={valor => setArtist(valor)}
                />

                <DataMusic 
                label='Link Spotify' 
                placeholder='Url da Musica no Spotify'
                valor={spotify}
                changeOn={valor => setSpotify(valor)}
                />

                <DataMusic 
                label='Link Youtube' 
                placeholder='Url da Musica no youtube'
                valor={youtube}
                changeOn={valor => setYoutube(valor)}
                />

                <OptionsGender  
                option='Gênero' 
                genders={props.gender}
                valor={gender}
                changeDigit={valor => setGender(valor)}
                />

                <ButtonOp>Adicionar</ButtonOp>
            </form>
        </section>
    );

}

export default Form