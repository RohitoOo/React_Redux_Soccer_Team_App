import React, * as react from "react"
import { connect } from "react-redux"
import { Box, Button, TextInput } from "grommet"
class EditPlayer extends react.Component {
  state = {
    name: this.props.editPlayer[0].name,
    position: this.props.editPlayer[0].position,
    club: this.props.editPlayer[0].club
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  DummyFunc = () => {
    //handle On Change input field Error
  }
  handleUpdate = e => {
    e.preventDefault()

    console.log(e.target["playerId"].value)
    let updatedPlayer = {}
    if (e.target["playerId"].value < 12) {
      updatedPlayer = {
        id: e.target["playerId"].value,
        name: e.target["name"].value,
        position: e.target["position"].value
        // club: e.target["club"].value,
      }
      this.props.handleUpdatePlayerTeam1(updatedPlayer)
      this.props.history.push("/")
    } else {
      updatedPlayer = {
        id: e.target["playerId"].value,
        name: e.target["name"].value,
        position: e.target["position"].value
        // club: e.target["club"].value,
      }
      this.props.handleUpdatePlayerTeam2(updatedPlayer)
      this.props.history.push("/")
    }

    //  updatedPlayer = {
    //   id: e.target["playerId"].value,
    //   name: e.target["name"].value,
    //   position: e.target["position"].value
    //   // club: e.target["club"].value,
    // }
    // // console.log({ updatedPlayer })
    // this.props.handleUpdatePlayerTeam1(updatedPlayer)
    // this.props.history.push("/")
  }
  render() {
    return (
      <form onSubmit={this.handleUpdate}>
        <Box align="center" gap="medium" pad="small">
          <TextInput
            style={{ display: "none" }}
            name="playerId"
            onChange={this.DummyFunc}
            value={this.props.editPlayer[0].id}
          />
          <h1>Soccer Player</h1>
          <TextInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <h1>Player's Position</h1>
          <TextInput
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
            required
          />
          {/* <select id="club" name="club">
            <option>{this.state.club}</option>
            <option value="Manchester United">
              Manchester United ( Good Choice )
            </option>
            <option value="Juventus">Juventus</option>
            <option value="Real Madrid">Real Madrid</option>
            <option value="Chelsea">Chelsea</option>
            <option value="Arsenal">Arsenal</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select> */}
          <Button type="submit" id="button" label="Update" />
        </Box>
      </form>
    )
  }
}
const matchStateToProps = state => {
  return {
    editPlayer: state.editPlayer
  }
}

const matchDispatchToProps = dispatch => {
  return {
    handleUpdatePlayerTeam1: updatedPlayer => {
      dispatch({ type: "UPDATE_PLAYER_1", updatedPlayer })
    },
    handleUpdatePlayerTeam2: updatedPlayer => {
      dispatch({ type: "UPDATE_PLAYER_2", updatedPlayer })
    }
  }
}

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(EditPlayer)
