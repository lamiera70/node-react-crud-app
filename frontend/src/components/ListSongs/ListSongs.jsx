import './ListSongs.css'

function ListSongs({songs, selectedSong, setSelectedSong}) {
  return (
    <div className='list-container'>
      <table>
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Artista</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr 
              key={song.id}
              className={selectedSong?.id === song.id ? "active" : ""}
              onClick={() => setSelectedSong(song)}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListSongs