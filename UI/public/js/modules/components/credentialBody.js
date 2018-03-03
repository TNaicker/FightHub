import React from 'react';

const Form = React.createClass({
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="submit" className="form-btn btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})



//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="correctional-space"></div>
        <div className="container-fluid">
          <div className="login-main">
            <div className="row login-midRow">
              <div className="col-xs-11 login-mid real-mid" style={{color: 'white'}}>
                <Form/>
              </div>
            </div>
          </div>
        </div>
        <div className="correctional-space"></div>
      </div>
    )
  }
})
