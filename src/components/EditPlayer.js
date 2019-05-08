import React, * as react from "react"
import { connect } from "react-redux"

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
    let updatedPlayer = {
      id: e.target["playerId"].value,
      name: e.target["name"].value,
      position: e.target["position"].value
      // club: e.target["club"].value,
    }
    console.log({ updatedPlayer })
    this.props.handleUpdatePlayer(updatedPlayer)
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleUpdate}>
          <input
            style={{ display: "none" }}
            name="playerId"
            onChange={this.DummyFunc}
            value={this.props.editPlayer[0].id}
          />{" "}
          <h1>Soccer Player</h1>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />{" "}
          <h1>Player's Position</h1>
          <br />
          <input
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
            required
          />{" "}
          <h1>Club</h1>
          <br />
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
          <button id="button"> Edit Player </button>
        </form>
      </div>
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
    handleUpdatePlayer: updatedPlayer => {
      dispatch({ type: "UPDATE_PLAYER", updatedPlayer })
    }
  }
}

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(EditPlayer)
