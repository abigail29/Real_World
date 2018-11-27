import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import NameField from '../components/NameField';
import BookField from '../components/BookField';
import DateField from '../components/DateField';
import DescriptionField from '../components/DescriptionField';
import MovieField from '../components/MovieField';
import LocationField from '../components/LocationField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      description: '',
      date: '',
      book: '',
      movie: '',
      current_user: {}
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleBookChange = this.handleBookChange.bind(this)
    this.handleMovieChange = this.handleMovieChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addSubmission = this.addSubmission.bind(this)
  }
  handleClearForm(){
    this.setState({
      name:'',
      location: '',
      description: '',
      date: '',
      book: '',
      movie: ''
    })
  }
  handleNameChange(event){
    this.setState({ name: event.target.value})
  }
  handleLocationChange(event){
    this.setState({ location: event.target.value})
  }
  handleDescriptionChange(event){
    this.setState({ description: event.target.value})
  }
  handleDateChange(event){
    this.setState({ date: event.target.value})
  }
  handleBookChange(event){
    this.setState({ book: event.target.value})
  }
  handleMovieChange(event){
    this.setState({ movie: event.target.value})
  }

  addSubmission(formPayload) {
    fetch('/api/v1/interests', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
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
    })
    .catch(error => console.error('Error:', error));
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      name: this.state.name,
      location: this.state.location,
      description: this.state.description,
      date: this.state.date,
      book: this.state.book,
      movie: this.state.movie
    }
    this.addSubmission(formPayload)
    this.handleClearForm()
    browserHistory.push("/")
  }

  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <h3 className="person">Add in information about yourself</h3>
      <NameField
      handleNameChange={this.handleNameChange}
      content={this.state.name}
      />
      <LocationField
      handleLocationChange={this.handleLocationChange}
      content={this.state.location}
      />
      <DescriptionField
      handleDescriptionChange={this.handleDescriptionChange}
      content={this.state.description}
      />
      <DateField
      handleDateChange={this.handleDateChange}
      content={this.state.date}
      />
      <MovieField
      handleMovieChange={this.handleMovieChange}
      content={this.state.movie}
      />
      <BookField
      handleBookChange={this.handleBookChange}
      content={this.state.book}
      />
      <input type="submit" className="button" value="Submit "/>
      </form>
      </div>

    )

  }

}


export default FormContainer;
