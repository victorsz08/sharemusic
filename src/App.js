import { useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Form from './components/Form';
import Gender from './components/Genders';
import Baseboard from './components/baseboard';

function App() {
  
  const genders = [
    {
      name:"Trap/Hip-Hop/Rap",
      colorPrimary: '#01A1F7',
      colorSecondary: '#DBF2FE'
    },
    {
      name: "Pop",
      colorPrimary: '#7C01F7',
      colorSecondary: '#EFE0FE'
    },
    {
      name:"Eletrônicas",
      colorPrimary: '#F70184',
      colorSecondary: '#FECCE6'
    },
    {
      name: "Forró/Sertanejo",
      colorPrimary: '#F7F701',
      colorSecondary: '#FCFCD4'
    },
    {
      name: "Gospel",
      colorPrimary: '#01F701',
      colorSecondary: '#D1FED1'
    }
  ];

  const [musics, setMusics] = useState([])

  const newMusicAdd = (music) => {
    setMusics([...musics, music])
  }


  return (
    <div className="app">
      <Banner/>
      <Form gender={genders.map(gender => gender.name)}  musicAdd={music => newMusicAdd(music)}/>
      {genders.map(genders => 
      <Gender 
      key={genders.name} 
      name={genders.name}
      colorPrimary={genders.colorPrimary}
      colorSecondary={genders.colorSecondary}
      musics={musics.filter(music => music.gender === genders.name)}
      />)}
      <Baseboard/>
    </div>
  );
}

export default App;
