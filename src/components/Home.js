import React, * as react from "react"
import Team2 from "./Team2"
import Team1 from "./Team1"
import AddPlayer from "./AddPlayer"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
// import "../static/styles.css"
import { Box, Heading, Button } from "grommet"
class Home extends react.Component {
  render() {
    return (
      <Box>
        {this.props.Team1Players.length === 0 ? (
          <div>
            <AddPlayer />
          </div>
        ) : (
          <Box direction="row" justify="between" align="center">
            <Box pad="small" align="center">
              <Team1 {...this.props} />
              <Link to="/addPlayer">
                <Button label="Add Player" />
              </Link>
            </Box>
            <Heading>VS</Heading>
            <Box pad="small" align="center">
              <Team2 {...this.props} />
              <Link to="/addPlayer">
                <Button label="Add Player" />
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
    Team1Players: state.Team1Players
  }
}

export default connect(mapStateToProps)(Home)
