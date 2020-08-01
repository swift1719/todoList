import React from 'react';

const Functionalities = ({ todoList }) => {
	return (
		<div className="container " style={{ marginTop: '20px', padding: '0px 0px' }}>
			<div className="d-flex flex-row justify-content-end">
				<div className="col-sm-3 ">
					<div className=" alert alert-warning border border-danger">
						<h4 className="rounded-pill">
							Tasks to be done : {todoList.filter((task) => !task.complete).length}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Functionalities;
