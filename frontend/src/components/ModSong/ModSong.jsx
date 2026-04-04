

import './ModSong.css';

function ModSong({title, setTitle, artist, setArtist}) {

  return (
    <div className="mod-card">
      <h3>Modifica brano</h3>

      <label>Titolo</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Artista</label>
      <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
    </div>
  )
}

export default ModSong