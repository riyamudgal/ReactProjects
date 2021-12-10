import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  function checkform()
  {
    var pass =  document.getElementById("exampleInputPassword1")
    var mail = document.getElementById("exampleInputEmail1")
    if(pass == "123mca" && mail == "riya") return true
 
    else return false;
  }
    return (
        <div>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link to="components/classComponent.js"> 
  <button type="submit" onClick={checkform()} class="btn btn-primary">Submit</button>
  </Link>
</form>
        </div>
    )
}

export default Login