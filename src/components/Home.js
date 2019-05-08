import React, * as react from "react"
import FootBallers from "./Footballers"
import AddPlayer from "./AddPlayer"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
// import "../static/styles.css"
import { Box, Heading } from "grommet"
class Home extends react.Component {
  render() {
    return (
      <Box>
        {this.props.soccerPlayers.length === 0 ? (
          <div>
            <AddPlayer />
          </div>
        ) : (
          <Box direction="row" justify="between" align="center">
            <Box pad="small">
              <FootBallers {...this.props} />
              <Link to="/addPlayer">
                <button id="button">Add Player</button>
              </Link>
            </Box>
            <Heading>VS</Heading>
            <Box>
              <FootBallers />
              <Link to="/addPlayer">
                <button id="button">Add Player</button>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    soccerPlayers: state.soccerPlayers
  }
}

export default connect(mapStateToProps)(Home)
