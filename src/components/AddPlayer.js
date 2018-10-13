import React, { Component } from 'react';
import { connect } from 'react-redux'


class AddPlayer extends Component{ 
  handleSubmit = (e) => {
    e.preventDefault();
     var newPlayer = {
       // Unique Id Number For Each Player
       id: Date.now(),
       name: e.target.name.value,
       position: e.target.position.value,
       club: e.target.club.value
     }
     this.props.addPlayer(newPlayer)
     
    // Reset form values
 
     e.target.name.value = "";
     e.target.position.value = "";

  }
  render(){
    return(<div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Soccer Player" required/>
        <br/>
        <input type="text"  name="position" placeholder="Player's Position" required/>
        <br/>
        <select id="club" name="club">
          <option value="Manchester United">Manchester United ( Good Choice )</option>
          <option value="Juventus">Juventus</option>
          <option value="Real Madrid">Real Madrid</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Barcelona">Bayern Munich</option>
        </select>
        <button id='button'> Add Player </button>
      </form>
    </div>

    )
  }
}

const mapStateToProps = (dispatch) => {
  return {
    addPlayer: (newPlayer) => { dispatch({type: "ADD_PLAYER", newPlayer: newPlayer})}
  }
}

export default connect(null, mapStateToProps)(AddPlayer)
