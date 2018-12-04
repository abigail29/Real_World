import React, { Component } from 'react';
import UserTile from '../components/UserTile'

class UserIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

  }

  componentDidMount(){
    fetch(`/api/v1/users`)
    .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(users => {
          this.setState({ users });
        })
    }

  render() {
    let mappedUsers;
    console.log(this.state.users)
    mappedUsers = this.state.users.map(user => {
      return(
        <UserTile
          key = {user.id}
          id = {user.id}
          email = {user.email}
        />
      )
    })
    return (
      <div>
        <h1>List of Users!</h1>
        <ul>
          {mappedUsers}
        </ul>
      </div>
    )
  }

}

export default UserIndexContainer
