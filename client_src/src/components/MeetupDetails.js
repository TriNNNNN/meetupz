import React,{ Component } from 'react'
import axios  from 'axios'
import { Link }  from 'react-router-dom'


class MeetupDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount(){
    this.getMeetupDetails()
  }

  getMeetupDetails(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
    .then(response => {
      this.setState({
        details: response.data
      })
    })
    .catch(error => {
      console.log('error----->',error)
    })
  }

  onDelete(){
    let deleteMeetupId = this.state.details.id
    axios.delete(`http://localhost:3000/api/meetups/${deleteMeetupId}`)
    .then(response => {
      this.props.history.push('/')
    })
    .catch(error => {
      console.log('error---', error)
    })
  }

  render(){
    return(
      <div>
        <br />
        <Link className = 'btn grey' to="/">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {this.state.details.city}</li>
          <li className="collection-item">Address: {this.state.details.address}</li>
        </ul>
        <Link className="btn" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
        <button className ='btn red right' onClick={this.onDelete.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default MeetupDetails;