
import React, { Component } from 'react';
import FootBallers from './components/Footballers'
import AddPlayer from './components/AddPlayer'
import { connect } from 'react-redux'
 
import "./static/styles.css"

class App extends Component {

  state = {
    soccerPlayers : [
      {id: 1, name: "Christiano Ronaldo" , position: "Right Forward" , club: "Juventus"},
      {id: 2,name: "Rooney" , position: "Forward" , club: "Manchester United"},
      {id: 3,name: "Sergio Ramos" , position: "Center Back" , club: "Real Madrid"},
    ]
  }

  handleDelete = (id) => {

    var soccerPlayers = this.props.soccerPlayers
    soccerPlayers = soccerPlayers.filter( (eachPlayer) => {
    eachPlayer.id = eachPlayer.id.toString()
      return eachPlayer.id !== id
    } )

      this.setState({
        soccerPlayers : soccerPlayers
      })
  }

  handleDeleteAllPlayersFromState = () => {
    this.setState({
      soccerPlayers : []
    })
  }

   handleSubmit = (e) => {
     e.preventDefault()

    var newPlayer = {
      // Unique Id Number For Each Player
      id: Date.now(),
      name: e.target.name.value,
      position: e.target.position.value,
      club: e.target.club.value
    }

    var soccerPlayers = this.props.soccerPlayers;
    soccerPlayers =  [newPlayer , ...soccerPlayers]

    this.setState({
      soccerPlayers : [...soccerPlayers]
    })

    // Reset form values

    e.target.name.value = "";
    e.target.position.value = "";

  }
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Create Your Dream Team [React App] </h1>
        {this.props.soccerPlayers.length === 0 ? (
        <div>
        <AddPlayer handleSubmited={this.handleSubmit} />
        </div>
        ) : (
          <div>
          <FootBallers handleDeleteAllPlayersFromState={this.handleDeleteAllPlayersFromState} 
          handleDeleted={this.handleDelete} soccerPlayers={this.props.soccerPlayers} />
          <AddPlayer handleSubmited={this.handleSubmit} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soccerPlayers : state.soccerPlayers
  }
}

export default connect(mapStateToProps)(App);


// Container Component (Class Component) VS UI Component

// Container Component
// 1. Contain State
// 2. Contain Life cycle hooks
// 3. Not Concerned with UI
// 4. Use Classe to create these components
//
// UI Components
// 1. Does not contain State ( rec data from Container Comp)
// 2. Receive Data from props
// 3. Only concerned with UI
// 4. Use Functions instead of classses to create these compoenets
