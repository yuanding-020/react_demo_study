import React, { Component } from 'react'
import  './index.css'

export default class List extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div className="row">
        {
          this.props.users.map((user) =>{
            return (
              <div className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img alt="ration" src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}
