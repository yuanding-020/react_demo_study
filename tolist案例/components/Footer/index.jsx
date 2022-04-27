import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	handleCheckeAll = (event) => {
		this.props.handelchecktodo(event.target.checked);
	}
	handleClearAllDone = () => {
		this.props.handelClearAllDone()
	}
	render() {
		const {todos} = this.props
		// 已完成的
		const doneCount = todos.reduce((pre,todo)=>{
			return pre+(todo.done?1:0)
		},0)
		// 总数
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={doneCount === total && total !==0 ? 1 : 0} onChange={this.handleCheckeAll}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
