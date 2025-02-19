import { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(){
        return(
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MTA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies">movies</Link>
        </li>
        <li className="nav-item"/>
          <Link className="nav-link" to="/tv">Tv</Link>    
      </ul>
    </div>
  </div>
</nav>
        )
    }
}