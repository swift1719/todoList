import React from 'react';
import './App.css';
import Display from './components/display';
import AddTask from './components/addTask';
import Nav from './components/navbar';
import Fuctionalities from './components/functional';
class App extends React.Component {
	state = {
		todoList: [
			{
				id: 1,
				name: 'Broadband Recharge',
				complete: false
			},
			{
				id: 2,
				name: 'Electricity Bill',
				complete: false
			},
			{
				id: 3,
				name: 'Assignments',
				complete: false
			}
		]
	};
	addtask = (task) => {
		task.id = 5 + Math.floor(Math.random() * 1000);
		this.setState({
			todoList: [ ...this.state.todoList, task ]
		});
	};
	taskDone = (id) => {
		this.setState({
			todoList: this.state.todoList.map((task) => {
				if (task.id === id) {
					return {
						...task,
						complete: !task.complete
					};
				} else {
					return task;
				}
			})
		});
	};
	render() {
		return (
			<div className="App ">
				<Nav />
				<Display todoList={this.state.todoList} taskDone={this.taskDone} />
				<Fuctionalities todoList={this.state.todoList} />
				<AddTask addtask={this.addtask} />
			</div>
		);
	}
}

export default App;
