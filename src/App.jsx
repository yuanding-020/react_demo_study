import React, { Component } from 'react'
import List from './components/list'
import Search from './components/search'

export default class App extends Component {
	state = {users:[]}
	setDate = (users) => {
		this.setState({users})
	}
	render() {
		return (
			<div className="container">
				<Search setDate={this.setDate}/>
				<List users={this.state.users}/>
			</div>
		)
	}
}
