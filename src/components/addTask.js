import React from 'react';

class AddTask extends React.Component {
	state = {
		name: '',
		complete: false
	};
	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();

		this.props.addtask(this.state);
		this.setState({
			name: '',
			complete: false
		});
	};
	render() {
		return (
			<div className="container ">
				<div className="d-flex flex-row justify-content-center">
					<div className="col-sm-6 ">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group ">
								<input
									id="name"
									className=" form-control border border-primary rounded"
									type="text"
									placeholder="Add a Task "
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default AddTask;
