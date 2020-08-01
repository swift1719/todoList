import React from 'react';
const Display = ({ todoList, taskDone }) => {
	const list = todoList.length ? (
		todoList.map((todo) => {
			const { id, name, complete } = todo;
			return (
				<div
					className=" alert alert-info  rounded-pill"
					style={{ backgroundColor: '#28B9B5', listStyle: 'none', padding: '0px 0px' }}
					key={id}
					onClick={() => {
						taskDone(id);
					}}
				>
					<h3 style={{ textDecoration: complete ? 'line-through' : '' }}>{name}</h3>
				</div>
			);
		})
	) : (
		<p className="container">Add first task</p>
	);

	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-center" style={{ marginTop: '110px' }}>
				<div className="col-sm-8">{list}</div>
			</div>
		</div>
	);
};
export default Display;
