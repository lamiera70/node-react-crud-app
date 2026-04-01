import './ListSongs.css'

function ListSongs({songs, selectedSongId, setSelectedSongId}) {
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
              className={selectedSongId === song.id ? "active" : ""}
              onClick={() => setSelectedSongId(song)}>
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