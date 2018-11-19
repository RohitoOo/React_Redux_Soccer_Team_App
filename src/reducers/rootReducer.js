const initState = {
    soccerPlayers : [
        {id: 1, name: "Cristiano Ronaldo", position: "Right Forward" , club: "Juventus"},
        {id: 2,name: "Rooney", position: "Forward" , club: "Manchester United"},
        {id: 3,name: "Sergio Ramos", position: "Center Back" , club: "Real Madrid"},
      ],
      editPlayer: [
            {id: 1, name: "Cristiano Ronaldo", position: "Right Forward" , club: "Juventus"}
      ]
}

const rootReducer = (state = initState, action) => {
switch(action.type){
    case "DELETE_ALL_PLAYERS":
        return {
            ...state,
            soccerPlayers : []
        }
     case "EDIT_PLAYER":
        return {
            ...state,
            editPlayer : state.soccerPlayers.filter( player => {
                return player.id === action.id 
            })
        }
    case "UPDATE_PLAYER":
        return {
            ...state,
            soccerPlayers: state.soccerPlayers.map( player => {
                player.id === Number(action.updatedPlayer.id) && (
                    player.name = action.updatedPlayer.name,
                    player.position = action.updatedPlayer.position,
                    player.club = action.updatedPlayer.club
                )
                return player
            })
        }                  
    case "DELETE_PLAYER":
        return {
            ...state,
            soccerPlayers : state.soccerPlayers.filter( player => {
                return player.id !== action.id 
            })
        }
    case "ADD_PLAYER":
        return {
            ...state,
            soccerPlayers: [action.newPlayer, ...state.soccerPlayers]
        }        
    default:  
        return state
    }  
   
}

export default rootReducer; 