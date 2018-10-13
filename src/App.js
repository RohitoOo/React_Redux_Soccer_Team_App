import React, { Component } from 'react';
import FootBallers from './components/Footballers'
import AddPlayer from './components/AddPlayer'
import { connect } from 'react-redux'
 
import "./static/styles.css"

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Create Your Dream Team [ React / Redux ] </h1>
        {this.props.soccerPlayers.length === 0 ? (
        <div>
        <AddPlayer handleSubmited={this.handleSubmit} />
        </div>
        ) : (
          <div>
          <FootBallers  
           soccerPlayers={this.props.soccerPlayers} />
          <AddPlayer />
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
