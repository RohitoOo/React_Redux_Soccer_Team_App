const initState = {
  Team1Players: [
    {
      id: 1,
      name: "Manuel Neuer",
      position: "Goal Keeper",
      club: "Juventus"
    },
    {
      id: 2,
      name: "Evra",
      position: "Center Back",
      club: "Manchester United"
    },
    {
      id: 3,
      name: "Puyol",
      position: "Center Back",
      club: "Real Madrid"
    },
    {
      id: 4,
      name: "David Silve",
      position: "Right Back",
      club: "Real Madrid"
    },
    {
      id: 5,
      name: "Martial",
      position: "Left Back",
      club: "Real Madrid"
    },
    {
      id: 6,
      name: "Ronaldo",
      position: "Mid-Fielder Back",
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
      name: "Mo Salah",
      position: "Mid-Fielder",
      club: "Real Madrid"
    },
    {
      id: 9,
      name: "Messi",
      position: "Attacker",
      club: "Real Madrid"
    },
    {
      id: 10,
      name: "Luis Suárez",
      position: "Attacker",
      club: "Real Madrid"
    },
    {
      id: 11,
      name: "Zlatan Ibrahimović",
      position: "Attacker",
      club: "Real Madrid"
    }
  ],

  Team2Players: [
    {
      id: 12,
      name: "David de Gea",
      position: "Goal Keeper",
      club: "Juventus"
    },
    { id: 13, name: "Rooney", position: "Forward", club: "Manchester United" },
    {
      id: 14,
      name: "Mathieu Debuchy",
      position: "Center Back",
      club: "Real Madrid"
    },
    {
      id: 15,
      name: "Pique",
      position: "Center Back",
      club: "Real Madrid"
    },
    {
      id: 16,
      name: "Mathieu Debuchy",
      position: "Left Back",
      club: "Real Madrid"
    },
    {
      id: 17,
      name: "Sergio Ramos",
      position: "Right Back",
      club: "Real Madrid"
    },
    {
      id: 18,
      name: "Ángel di María",
      position: "Mid-Fielder",
      club: "Real Madrid"
    },
    {
      id: 19,
      name: "Sergio Ramos",
      position: "Mid-Fielder",
      club: "Real Madrid"
    },
    {
      id: 20,
      name: "Mbape",
      position: "Attacker",
      club: "Real Madrid"
    },
    {
      id: 21,
      name: "Cristiano Ronaldo",
      position: "Attacker",
      club: "Real Madrid"
    },
    {
      id: 22,
      name: "Neymar",
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
        Team1Players: [],
        Team2Players: []
      }
    case "EDIT_PLAYER_1":
      return {
        ...state,
        editPlayer: state.Team1Players.filter(player => {
          console.log(player.id, action.id)
          return player.id === action.id
        })
      }
    case "EDIT_PLAYER_2":
      return {
        ...state,
        editPlayer: state.Team2Players.filter(player => {
          return player.id === action.id
        })
      }
    case "UPDATE_PLAYER_1":
      return {
        ...state,
        Team1Players: state.Team1Players.map(player => {
          player.id === Number(action.updatedPlayer.id) &&
            ((player.name = action.updatedPlayer.name),
            (player.position = action.updatedPlayer.position),
            (player.club = action.updatedPlayer.club))
          return player
        })
      }
    case "UPDATE_PLAYER_2":
      return {
        ...state,
        Team2Players: state.Team2Players.map(player => {
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
        Team1Players: state.Team1Players.filter(player => {
          return player.id !== action.id
        })
      }
    case "ADD_PLAYER":
      return {
        ...state,
        Team1Players: [...state.Team1Players, action.newPlayer]
      }
    default:
      return state
  }
}

export default rootReducer
