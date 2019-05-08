import React, * as react from "react"
import { connect } from "react-redux"
// import PropTypes from 'prop-types';
import { Box, TextInput, Button, Text } from "grommet"
class AddPlayer extends react.Component {
  handleSubmit = e => {
    e.preventDefault()
    var newPlayer = {
      // Unique Id Number For Each Player
      id: Date.now(),
      name: e.target.name.value,
      position: e.target.position.value
      // club: e.target.club.value
    }
    this.props.addPlayer(newPlayer)
    // Reset form values
    e.target.name.value = ""
    e.target.position.value = ""
    this.props.history && this.props.history.push("/")
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Box pad="small" gap="medium" align="center" justify="center">
          <Text>Add A New Player To Your Squad</Text>
          <TextInput
            type="text"
            name="name"
            placeholder="Soccer Player"
            required
          />
          <TextInput
            type="text"
            name="position"
            placeholder="Player's Position"
            required
          />
          {/* <select id="club" name="club">
          <option value="Manchester United">Manchester United ( Good Choice )</option>
          <option value="Juventus">Juventus</option>
          <option value="Real Madrid">Real Madrid</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Bayern Munich">Bayern Munich</option>
        </select> */}
          <Box>
            <Button type="submit" pad="small">
              {" "}
              Add Player{" "}
            </Button>
          </Box>
        </Box>
      </form>
    )
  }
}
const mapStateToProps = dispatch => {
  // Display Action
  return {
    addPlayer: newPlayer => {
      dispatch({ type: "ADD_PLAYER", newPlayer: newPlayer })
    }
  }
}

export default connect(
  null,
  mapStateToProps
)(AddPlayer)
