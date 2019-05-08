import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  Box,
  Table,
  TableCell,
  TableBody,
  TableHeader,
  TableRow,
  Button,
  Heading,
  Text
} from "grommet"
class FootBallers extends Component {
  deleteAllPlayers = () => {
    this.props.handleDeleteAllPlayers()
  }

  deletePlayer = id => {
    this.props.handleDeletePlayer(id)
  }

  editPlayer = id => {
    this.props.selectPlayerToEdit(id)
  }

  render() {
    return (
      <div>
        <Box>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell scope="col" border="bottom">
                  <Heading level="3">No.</Heading>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Player Name
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Player's Position
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.soccerPlayers.map((player, index) => (
                <TableRow>
                  <TableCell scope="row">
                    <strong>{index + 1}</strong>
                  </TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.position}</TableCell>
                  <TableCell>
                    <Button label="Edit" />
                  </TableCell>
                  <TableCell>
                    <Button label="Delete" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Soccer Player</th>
              <th>Position</th>
              {/* <th>Club</th> */}
              <th>
                <button id="deleteBtn" onClick={this.deleteAllPlayers}>
                  {" "}
                  Remove All{" "}
                </button>
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.soccerPlayers.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>
                  {player.name}{" "}
                  <span>
                    {" "}
                    <a
                      style={{ textDecoration: "none" }}
                      title="Who This ?"
                      className="fa fa-question-circle fa-lg"
                      href={"https://www.google.com/search?q=" + player.name}
                    />{" "}
                  </span>
                </td>
                <td>{player.position}</td>
                {/* <td>{player.club}</td> */}
                <td>
                  {" "}
                  <button
                    style={{ round: "20px" }}
                    id="deleteBtn"
                    onClick={() => this.deletePlayer(player.id)}>
                    Remove Player
                  </button>
                </td>
                <td>
                  <Link to="/editPlayer">
                    <button
                      id="editBtn"
                      onClick={() => this.editPlayer(player.id)}>
                      {" "}
                      Edit Player{" "}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDeleteAllPlayers: () => {
      dispatch({ type: "DELETE_ALL_PLAYERS" })
    },
    handleDeletePlayer: id => {
      dispatch({ type: "DELETE_PLAYER", id: id })
    },
    selectPlayerToEdit: id => {
      dispatch({ type: "EDIT_PLAYER", id: id })
    }
  }
}

const mapStateToProps = state => {
  return {
    soccerPlayers: state.soccerPlayers
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FootBallers)
