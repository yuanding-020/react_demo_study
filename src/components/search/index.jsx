import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = () =>{
    const {keywordElement:{value:keyword}} = this
    console.log(keyword)
    PubSub.publish('userDate',{isFirst:false,isLoading:true})
    axios.get(`/api1/search/users?q=${keyword}`).then(
      response=>{
        const res  = response.data.items
        PubSub.publish('userDate',{users:res,isLoading:false,})        
      },
      err=>{PubSub.publish('userDate',{err:err.message,isLoading:false,})  }
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
