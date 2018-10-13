const initState = {
    soccerPlayers : [
        {id: 1, name: "Christiano Ronaldo" , position: "Right Forward" , club: "Juventus"},
        {id: 2,name: "Rooney" , position: "Forward" , club: "Manchester United"},
        {id: 3,name: "Sergio Ramos" , position: "Center Back" , club: "Real Madrid"},
      ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer; 