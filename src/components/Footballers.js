import React, { Component } from 'react';
import { connect } from 'react-redux';


class FootBallers extends Component{

  deleteAllPlayers = () => {
    this.props.handleDeleteAllPlayers();
  }
  render(){

    return(
      <div>
      <table>
        <tbody>
        <tr>
          <th>Soccer Player</th>
          <th>Position</th>
          <th>Club</th>
          <th><button id="deleteBtn" onClick={this.deleteAllPlayers}> Remove All </button></th>
        </tr>
        {this.props.soccerPlayers.map( player => {
          return   (<tr key={player.id}>
            <td>{player.name}  <span> <a style={{textDecoration:"none"}} title="Who This ?" 
            className="fa fa-question-circle fa-lg" href={"https://www.google.com/search?q=" + player.name}>
            </a> </span>
               </td>
            <td>{player.position}</td>
            <td>{player.club}</td>
            <td> <button id="deleteBtn" value={player.id} > Remove Player </button></td>
        </tr>)
        })}
        {/* {this.props.soccerPlayers.map( player => 
         (<tr key={player.id}>
            <td>{player.name}  <span> <a style={{textDecoration:"none"}} title="Who This ?" 
            className="fa fa-question-circle fa-lg" href={"https://www.google.com/search?q=" + player.name}>
            </a> </span>
               </td>
            <td>{player.position}</td>
            <td>{player.club}</td>
            <td> <button id="deleteBtn" value={player.id} onClick={handleDelete}> Remove Player </button></td>
        </tr>)
        } */}
            {/* { players } */}
      </tbody>
    </table>
    </div>
    )
  }
}

// const FootBallers = ({handleDeleted, soccerPlayers, handleDeleteAllPlayersFromState}) => {
//   function handleDelete (e){
//     handleDeleted(e.target.value)
//   }
//   function handleDeleteAll(){
//     console.log("Handle Delete ALL")

//     // console.log(props)

//     // this.props.handleDeleteAllPlayers()
    
//   }
 
//  )
//   return (

// )}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteAllPlayers: () => { dispatch({type: "DELETE_ALL_PLAYERS" }) }
  }
}

export default connect(null, mapDispatchToProps)(FootBallers)
