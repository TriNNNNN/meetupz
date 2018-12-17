import React,{ Component } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render(){
    return (
      <div>
          <nav className="nav-extended red darken-3">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Meeetupz</a>
              <a data-target="mobile-demo" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/"><i className="fa fa-users"></i>Meetups</Link></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/"><i className="fa fa-users"></i> Meetups</Link></li>
            <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Add Meetup</Link></li>
            <li><Link to="/"><i className="fa fa-question-circle"></i> About</Link></li>
          </ul>

      
      </div>
    )
  }
}

export default Navbar;