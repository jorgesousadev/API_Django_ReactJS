import React from 'react'

const MusicaTabela = (props) => (
  <table>
    <thead>
      <tr>
        <th>Artista</th>
        <th>Foto</th>
        <th>Nome da Música</th>
        <th>Álbum</th>
        <th>Ano</th>
      </tr>
    </thead>
    <tbody>
      {props.musicas.length > 0 ? (
        props.musicas.map((musica) => (
          <tr key={musica.id}>
            <td>{musica.singer}</td>
            <td>
              <img
                src={musica.cover}
                style={{
                  width: "55px",
                  borderRadius: "5px"
                }}
              />
            </td>
            <td>{musica.name}</td>
            <td>{musica.album}</td>
            <td>{musica.year}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem Músicas</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default MusicaTabela;



