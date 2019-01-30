import React from 'react'
import FormContainer from '../containers/FormContainer'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import InterestShowContainer from '../containers/InterestShowContainer'
import UserIndexContainer from '../containers/UserIndexContainer'
import ChatContainer from '../containers/ChatContainer'


export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <div>
        <Route path='/' component={UserIndexContainer} />
        <Route path='/interests/new' component={FormContainer} />
        <Route path='/interests/:id' component={InterestShowContainer} />
        <Route path="trips/:id/chats" component={ChatContainer} />

      </div>
    </Router>
  )
}

export default App
