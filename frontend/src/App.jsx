
import reactLogo from './assets/react.svg';
const VITE_API_URL =  import.meta.env.VITE_API_URL;

import './App.css';
import { useEffect, useState } from 'react';
import ListSongs from './components/ListSongs/ListSongs';
import ModSong from './components/ModSong/ModSong';
import NewSong from './components/NewSong/NewSong';

function App() {

  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [selectedSongId, setSelectedSongId] = useState(null)
  const [mode, setMode] = useState("list")
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');


  function addSelectedSongId(id) {

    setSelectedSongId(id)
    setMode("edit")
  }

  function UndoSelectedSong() {

    setMode("list")
    setTitle("")
    setArtist("")
  }

  function addSong() {

    setMode("add")
    setTitle("")
    setArtist("")
  }

  function UndoAddSong() {

    setMode("list")
    setTitle("")
    setArtist("")
  }


  function loadSongs() {

    setSeconds(0)
    setLoading(true)

    fetch(`${VITE_API_URL}/songs`)
      .then(res => res.json())
      .then(data => {
        setSongs(data)
        setLoading(false)
      })
  }


  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [loading]);
  
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadSongs()
  }, [])


  useEffect(() => {

    if (selectedSongId) {
        fetch(`${VITE_API_URL}/songs/${selectedSongId}`)
          .then(res => res.json())
          .then(data => {
            setTitle(data.title);
            setArtist(data.artist);
          });
    }
  }, [selectedSongId]);


  function clickCreate() {
    
    if (title.trim().length === 0 || artist.trim().length === 0) {
      alert('Devi inserire il titolo e artista')
      return
    }  
    
    fetch(`${VITE_API_URL}/songs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            artist: artist,
            
        })
    })
            
          .then(res => res.json())
          .then(() => {
            setTitle(title);
            setArtist(artist);
            loadSongs()
            alert(`canzone creata con successo`)
            setMode("list")
          });
  }
  
  
  function clickEdit() {

    fetch(`${VITE_API_URL}/songs/${selectedSongId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            artist: artist,
            
        })
    })
            .then(res => res.json())
            .then(() => {
                loadSongs()
                alert(`canzone modificata con successo`)
                setMode("list")
            });
  }

  
  function clickDelete() {
  
    fetch(`${VITE_API_URL}/songs/${selectedSongId}`, {
        method: 'DELETE'
        
    })
            .then(res => res.json())
            .then(() => {
              loadSongs()
              alert(`canzone eliminata con successo`)
              setMode("list")
            });
  }
  

  return (
    <>
      <section id="center">

        {mode === "edit" && (
          <>
            <div>

              <button
                className='counter'
                onClick={clickEdit}
              >Salva</button>
              <button
                className='counter'
                onClick={clickDelete}
              >Elimina</button>
              <button 
                className='counter'
                onClick={UndoSelectedSong}
              >Annulla</button>
            </div>
            <ModSong 
              selectedSongId={selectedSongId}
              artist={artist}
              setArtist={setArtist}
              title={title}
              setTitle={setTitle}
            />
          </>
        )}

        {mode === "add" && (
          <>
             <div>

                <button
                  className='counter'
                  onClick={clickCreate}
                >Aggiungi</button>
                <button 
                  className='counter'
                  onClick={UndoAddSong}
                >Annulla</button>
              </div>
              <NewSong
                selectedSongId={selectedSongId}
                artist={artist}
                setArtist={setArtist}
                title={title}
                setTitle={setTitle}
              />
          </>
        )}

        {mode === "list" && (
          <>
              <button 
                className='counter'
                onClick={addSong}
              >Aggiungi</button>
              {loading ? (
              <p style={{ textAlign: "center" }}>
                ⏳ Il server di RENDER si sta riavviando (potrebbe richiedere fino a 30 secondi...)
                <p>Tempo: {seconds} secondi</p>
              </p>
              ) : (
                <ListSongs
                  songs={songs}
                  selectedSongId={selectedSongId}
                  setSelectedSongId={addSelectedSongId}
                />
              )}
          </>
        )}
        
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>www.devappspace.com</h2>
          <p>Dai un'occhiata alla mia HomePage</p>
          <ul>
            <li>
              <a href="https://www.devappspace.com/" target="_blank">
                <img className="logo" src={reactLogo} alt="" />
                My HomePage
              </a>
            </li>
            <li>
              <a href="https://www.devappspace.com/about" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                About Me
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with Me</h2>
          <p>Seguimi per vedere i miei progetti</p>
          <ul>
            <li>
              <a href="https://github.com/lamiera70/lamiera70" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lamiera/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:ale1970sys@gmail.com" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                @mail
              </a>
            </li>
            
          </ul>
        </div>
      </section>

    
    </>
  )
}

export default App
