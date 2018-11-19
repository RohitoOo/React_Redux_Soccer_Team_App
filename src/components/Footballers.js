import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class FootBallers extends Component{

  deleteAllPlayers = () => {
    this.props.handleDeleteAllPlayers();
  }

  deletePlayer = (id) => {
    this.props.handleDeletePlayer(id);
  }

  editPlayer = (id) => {
    this.props.selectPlayerToEdit(id); 
  }

  render(){
    return(
      <div>
      <table>
        <thead>
          <tr>
            <th>Soccer Player</th>
            <th>Position</th>
            <th>Club</th>
            <th><button id="deleteBtn" onClick={this.deleteAllPlayers}> Remove All </button></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.props.soccerPlayers.map( player => 
             <tr key={player.id}>
            <td>{player.name}  <span> <a style={{textDecoration:"none"}} title="Who This ?" 
            className="fa fa-question-circle fa-lg" href={"https://www.google.com/search?q=" + player.name}>
            </a> </span>
               </td>
            <td>{player.position}</td>
            <td>{player.club}</td>
            <td> <button id="deleteBtn" onClick={() => this.deletePlayer(player.id)}> Remove Player </button></td>
            <td> 
              <Link to='/editPlayer'>
               <button id="editBtn" onClick={() => this.editPlayer(player.id)}> Edit Player </button>
              </Link>
            </td>
        </tr>
        )}
      </tbody>
    </table>
    </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteAllPlayers: () => { dispatch({type: "DELETE_ALL_PLAYERS" }) },
    handleDeletePlayer : (id) => { dispatch({type: "DELETE_PLAYER", id : id })},
    selectPlayerToEdit : (id) => { dispatch({type: "EDIT_PLAYER", id : id })}
    
  }
}

const mapStateToProps = (state) => {
  return {
    soccerPlayers : state.soccerPlayers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FootBallers)
