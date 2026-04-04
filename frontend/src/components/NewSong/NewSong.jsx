
import './NewSong.css';

function NewSong({title, setTitle, artist, setArtist}) {

  return (
    <div className="new-card">
      <h3>Aggiungi brano</h3>

      <label>Titolo</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Artista</label>
      <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
    </div>
  )
}

export default NewSong