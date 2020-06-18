import React from "react";
import { Link } from "react-router-dom";

export default ({ handleChange, value, handleSubmit, username, handleLogout }) => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Movie"
        ></input>
        <button
          className="btn btn-sm btn-outline-secondary"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      {username ? 
        <ul className="navbar-nav">
        <li className="nav-item active">
            <h6 className="nav-link" href="#">
              {username} <span className="sr-only">(current)</span>
            </h6>
        </li>
        <li className="nav-item active">
            <a>
            <h6 className="nav-link" href="#" onClick={handleLogout}>
              logout <span className="sr-only">(current)</span>
            </h6>
            </a>
        </li>
      </ul>        
      : 
        <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to={'/register'}>
            <h6 className="nav-link" href="#">
              register <span className="sr-only">(current)</span>
            </h6>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to={'/login'}>
            <h6 className="nav-link" href="#">
              login <span className="sr-only">(current)</span>
            </h6>
          </Link>
        </li>
      </ul>
      }
    </nav>
  </div>
);
