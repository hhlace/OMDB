import React from "react";

export default ({ handleChangeUsername, handleChangePassword, username, password, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
          <h2>LogIn</h2>
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          onChange={handleChangeUsername}
          value={username}
        ></input>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChangePassword}
          value={password}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>
    </form>
  </div>
);