
import './NewSong.css';

function NewSong() {
  return (
    <div className="new-card">
      <h3>Aggiungi brano</h3>

      <label>Titolo</label>
      <input type="text" />

      <label>Artista</label>
      <input type="text"  />
    </div>
  )
}

export default NewSong