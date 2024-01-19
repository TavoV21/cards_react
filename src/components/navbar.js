import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Navbar extends Component{
 render(){
    return <nav class="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link text-light" to="/cards">Cards</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 }

}