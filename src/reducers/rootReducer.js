const initState = {
    soccerPlayers : [
        {id: 1, name: "Cristiano Ronaldo", position: "Right Forward" , club: "Juventus"},
        {id: 2,name: "Rooney", position: "Forward" , club: "Manchester United"},
        {id: 3,name: "Sergio Ramos", position: "Center Back" , club: "Real Madrid"},
      ]
}

const rootReducer = (state = initState, action) => {
switch(action.type){
    case "DELETE_ALL_PLAYERS":
        return {
            ...state,
            soccerPlayers : []
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