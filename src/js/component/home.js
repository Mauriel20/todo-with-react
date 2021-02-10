import React from "react";
import shortid from "shortid";
//include images into your bundle
//create your first component
export function Home() {
	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		console.log(tarea);
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);

		setTarea("");
	};

	upDateTask = id => {
		const updatedTasks = this.state.tarea.filter(
			tarea => tarea != this.state.tarea[id]
		);
		this.setState({ tarea: updatedTasks });
	};

	return (
		<div className="container">
			<h1 className="text-center">CRUD de Tareas con React</h1>
			<div className="row">
				<div className="col-12">
					<h4 className="text-center">Lista de Tareas</h4>
					<ul className="list-group">
						<form onSubmit={agregarTarea}>
							<li className="list-group-item">
								<input
									type="text"
									className="form-control mb-2"
									placeholder="Ingrese Tarea"
									onChange={e => setTarea(e.target.value)}
									value={tarea}
								/>
							</li>
						</form>
						{arrayTareas.map(item => (
							<li className="list-group-item" key={item.id}>
								<span className="lead">{item.nombreTarea}</span>
								<button
									type="button"
									className="ml-2 mb-1 close"
									data-dismiss="toast"
									aria-label="Close"
									onClick={upDateTask}>
									<span aria-hidden="true">&times;</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
