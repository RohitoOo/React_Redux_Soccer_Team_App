import React from 'react';

const FootBallers = ({handleDeleted, soccerPlayers}) => {

  const players = soccerPlayers.map( (player) => {

    function handleDelete (e){
      handleDeleted(e.target.value)
    }

    return  (
        <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.club}</td>
            <td> <button id="deleteBtn" value={player.id} onClick={handleDelete}> Remove Player </button></td>
        </tr>
    )
 })

  return (
  <div>
    <table>
      <tbody>
      <tr>
        <th>Soccer Player</th>
        <th>Position</th>
        <th>Club</th>
        <th></th>
      </tr>
          { players }
    </tbody>
  </table>
  </div>
)}

export default FootBallers;
