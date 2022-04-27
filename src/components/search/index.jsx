import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () =>{
    const {keywordElement:{value:keyword}} = this
    axios.get(`/api1/search/users?q=${keyword}`).then(
      response=>{
        const res  = response.data.items
        this.props.setDate(res)
      },
      err=>{console.log(err)}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input ref={e=>{this.keywordElement = e}} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
