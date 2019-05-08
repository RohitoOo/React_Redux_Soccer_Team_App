const initState = {
  soccerPlayers: [
    {
      id: 1,
      name: "David de Gea",
      position: "Goal Keeper",
      club: "Juventus"
    },
    { id: 2, name: "Rooney", position: "Forward", club: "Manchester United" },
    {
      id: 3,
      name: "Sergio Ramos",
      position: "Center Back",
      club: "Real Madrid"
    },
    {
      id: 4,
      name: "Sergio Ramos",
      position: "Center Back",
      club: "Real Madrid"
    },
    {
      id: 5,
      name: "Sergio Ramos",
      position: "Left Back",
      club: "Real Madrid"
    },
    {
      id: 6,
      name: "Sergio Ramos",
      position: "Right Back",
      club: "Real Madrid"
    },
    {
      id: 7,
      name: "Sergio Ramos",
      position: "Mid-Fielder",
      club: "Real Madrid"
    },
    {
      id: 8,
      name: "Sergio Ramos",
      position: "Mid-Fielder",
      club: "Real Madrid"
    },
    {
      id: 9,
      name: "Sergio Ramos",
      position: "Attacker",
      club: "Real Madrid"
    },
    {
      id: 10,
      name: "Sergio Ramos",
      position: "Attacker",
      club: "Real Madrid"
    },
    {
      id: 11,
      name: "Sergio Ramos",
      position: "Attacker",
      club: "Real Madrid"
    }
  ],
  editPlayer: [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      position: "Right Forward",
      club: "Juventus"
    }
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_ALL_PLAYERS":
      return {
        ...state,
        soccerPlayers: []
      }
    case "EDIT_PLAYER":
      return {
        ...state,
        editPlayer: state.soccerPlayers.filter(player => {
          return player.id === action.id
        })
      }
    case "UPDATE_PLAYER":
      return {
        ...state,
        soccerPlayers: state.soccerPlayers.map(player => {
          player.id === Number(action.updatedPlayer.id) &&
            ((player.name = action.updatedPlayer.name),
            (player.position = action.updatedPlayer.position),
            (player.club = action.updatedPlayer.club))
          return player
        })
      }
    case "DELETE_PLAYER":
      return {
        ...state,
        soccerPlayers: state.soccerPlayers.filter(player => {
          return player.id !== action.id
        })
      }
    case "ADD_PLAYER":
      return {
        ...state,
        soccerPlayers: [...state.soccerPlayers, action.newPlayer]
      }
    default:
      return state
  }
}

export default rootReducer
