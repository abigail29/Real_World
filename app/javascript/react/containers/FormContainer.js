import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name = '',
      location = '',
      description = '',
      date = '',
      book = '',
      movie = '',
      current_user: {}
    }

  }
  handleClearForm(){
    this.setState({
      name:'',
      location = '',
      description = '',
      date = '',
      book = '',
      movie = ''
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
    fetch('/api/v1/people', {
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
      this.setState({ current_user: body});
    })
    .catch(error => console.error('Error:', error));
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      name = this.state.name,
      location = this.state.location,
      description = this.state.description,
      date: this.state.date,
      book: this.state.book,
      movie: this.state.movie
    }
    this.addSubmission(formPayload)
    this.handleClearForm()
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


    )

  }

}


      <div>
        <form onSubmit={this.handleSubmit}>
          <h3 className="person">Add a New Person</h3>
          <NameField
            handleNameChange={this.handleNameChange}
            content={this.state.name}
          />
          <BirthdayField
            handleBirthdayChange={this.handleBirthdayChange}
            content={this.state.birthday}
          />
          <DescriptionField
            handleDescriptionChange={this.handleDescriptionChange}
            content={this.state.description}
          />
          <input type="submit" className="button" value="Submit "/>
        </form>
      </div>
    )
  }

}

export default FormContainer;
