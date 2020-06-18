import React from "react";

export default ({ handleChangeUsername, handleChangePassword, username, password, handleSubmit }) => (
  <div>
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          onChange={handleChangeUsername}
          value={username}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChangePassword}
          value={password}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  </div>
);
