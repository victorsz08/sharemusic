import Musics from '../Musics';
import './Genders.css'


const Gender = (props) => {
    return (
       <section className='gender-container' style={{ backgroundColor: props.colorSecondary }}>
            <h3 style={{color:props.colorPrimary}}>{props.name}</h3>
            <div className='card-container'>
                {props.musics.map(music => 
                    <Musics 
                    name={music.name} 
                    colorPrimary={props.colorPrimary}
                    artist={music.artist} 
                    spotify={music.spotify} 
                    youtube={music.youtube} 
                    key={music.name}/>)}
            </div>
        </section>
        
)

}

export default Gender 