
import { useState, useEffect } from 'react';
import './ModSong.css';

function ModSong({selectedSongId}) {

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  
  
  useEffect(() => {
        if (selectedSongId) {
            fetch(`http://localhost:3000/songs/${selectedSongId}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setArtist(data.artist);
                    
                });
        }
    }, [selectedSongId]);


  



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