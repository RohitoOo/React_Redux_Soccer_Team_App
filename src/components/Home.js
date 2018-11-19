import React, * as react from 'react';
import FootBallers from './Footballers'
import AddPlayer from './AddPlayer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "../static/styles.css"

class Home extends react.Component {
  render() {
    return (
      <div className="App">
        {this.props.soccerPlayers.length === 0 ? (
        <div>
        <AddPlayer />
        </div>
        ) : (
          <div>
          <FootBallers />
           <Link  to='/addPlayer' >
           <button id="button" >Add Player</button>
           </Link>
          
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

export default connect(mapStateToProps)(Home);