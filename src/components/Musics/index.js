import './Music.css'

const Musics = (props) => {
    return(
        <div className='music-container'>
            <div className='name-music'style={{backgroundColor: props.colorPrimary}}>
                <h2>{props.name}</h2>
                <p>{props.artist}</p>
            </div>
            <p>Links:</p>
            <div className='icons-links' >
                <a href={props.spotify} 
                target='blank'>
                    <img src='images/spotify.png' 
                    alt='Link Spotify' />
                </a>
                <a href={props.youtube} 
                target='blank'>
                    <img src='images/youtube.png' 
                    alt='Link Youtube' />
                </a>
            </div>
        </div>
    )
}

export default Musics