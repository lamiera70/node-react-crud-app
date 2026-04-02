
import './ModSong.css';

function ModSong({selectedSong}) {
  return (
    <div className="mod-card">
      <h3>Modifica brano</h3>

      <label>Titolo</label>
      <input type="text" defaultValue={selectedSong?.title} />

      <label>Artista</label>
      <input type="text" defaultValue={selectedSong?.artist} />
    </div>
  )
}

export default ModSong