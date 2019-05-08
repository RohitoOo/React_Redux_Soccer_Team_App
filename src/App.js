import React, * as react from "react"
import AddPlayer from "./components/AddPlayer"
import Home from "./components/Home.js"
import EditPlayer from "./components/EditPlayer"

import { connect } from "react-redux"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Grommet, Box } from "grommet"
import { theme } from "./theme"

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <Grommet theme={theme}>
          <Box>
            <h1 className="App-title">
              Create Your Dream Team [ React / Redux ]{" "}
            </h1>
            <Box>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/addPlayer" component={AddPlayer} />
                <Route exact path="/editPlayer" component={EditPlayer} />
              </Switch>
            </Box>
          </Box>
        </Grommet>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    soccerPlayers: state.soccerPlayers
  }
}

export default connect(mapStateToProps)(App)

// Container Component (Class Component) VS UI Component

// Container Component
// 1. Contain State
// 2. Contain Life cycle hooks
// 3. Not Concerned with UI
// 4. Use Class to create these components
//
// UI Components
// 1. Does not contain State ( rec data from Container Comp)
// 2. Receive Data from props
// 3. Only concerned with UI
// 4. Use Functions instead of classses to create these compoenets
