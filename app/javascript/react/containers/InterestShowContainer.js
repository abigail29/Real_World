import React, { Component } from 'react';
import InterestTile from '../components/InterestTile.js';


class InterestShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      user: {}
    }

  }

  componentDidMount(){
    fetch(`/api/v1/interests/${this.props.params.id}`)
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
        .then(interests => {
          this.setState({ interests });
        })
        fetch(`/api/v1/current_user`)
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
          .then(body => {
            if (body !== null) {
            this.setState({ user: body });
          })
      }

  render() {
    let mappedInterests;
    console.log(this.state.interests)
    mappedInterests = this.state.interests.map(interest => {
      return(
        <InterestTile
          key = {interest.id}
          id = {interest.id}
          name = {interest.name}
          location = {interest.location}
          date = {interest.date}
          book = {interest.book}
          movie = {interest.movie}
          description = {interest.description}
        />
      )
    })
    return (
      <div>
        <h1> hello {this.props.params.id} </h1>
        {mappedInterests}
        <a href="/interests/new">Make New Interest!</a>
      </div>
    )
  }

}

export default InterestShowContainer
