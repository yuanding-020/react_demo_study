import React, { Component } from 'react'
import List from './components/list'
import Search from './components/search'

export default class App extends Component {
	state = {users:[]}
	render() {
		return (
			<div className="container">
				<Search/>
				<List/>
			</div>
		)
	}
}
