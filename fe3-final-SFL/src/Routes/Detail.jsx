import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";


const Detail = () => {
	const [dentist, setDentist] = useState([])
	const {state: {dentists}} =useContext(ContextGlobal)

	const param = useParams();


	const getDentist = () => {
		let filtered = dentists.filter(dentist => dentist.id === parseInt(param.id));
		setDentist(filtered[0]);
		return filtered;
	};

	useEffect(() => {
		getDentist();
	}, [param]);

	return (
		<>
			{dentist && (
				<>
					<h1>Detail Dentist: {dentist.name} </h1>
					<div className="parentTable">
					<table>
						<thead>
						<tr>

							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							</tr>

						</thead>
							<tbody>
								<tr>
									<td>{dentist.name}</td>
									<td> {dentist.email}</td>
									<td>{dentist.phone}</td>
								</tr>
							</tbody>

					</table>
				</div>
				</>
			)}
		</>
	);
};

export default Detail;