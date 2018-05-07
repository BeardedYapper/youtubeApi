import React from 'react';
import axios from 'axios';
import moment from 'moment';

import Alert from '../controls/Alert';
import Box from '../controls/Box';
import Table from '../controls/Table';

class ApiPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.page = 1;
        this.state =
        {
            users: [],
            alertVisible: false,
            alertMessage: '',
            alertType: 'info'
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            this.setState({
                users: result.data,
            });
            // console.log(Object.keys(result.data[0]));
            // console.log(result.data[0]);
        })
        .catch(err => {
            this.setState({
                alertMessage: 'Error en la carga de datos',
                alertType: 'error',
                alertVisible: true
            });
        });
    }

    render()
    {
        return(
            <section className="content">
                {this.renderAlert()}
				<Box title='Data request example'>
					<Table title="Tabla" type="table-striped">
						<thead>
							<tr>
								<td/>
								<td/>
								<td/>
								<td/>
								<td/>
								<td>
									<select className="form-control">
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>ID</th>
								<th>Fecha</th>
								<th>Nombre</th>
								<th>Usuario</th>
								<th>Website</th>
								<th>Correo</th>
							</tr>
						</thead>
						<tbody>
							{this.state.users.map(this.renderUsers)}
						</tbody>
						<tfoot>
							<tr>
								<td/>
								<td/>
								<td/>
								<td/>
								<td/>
								<td>
									<nav>
										<ul className="pager">
											<li><a onClick={this.prev}>Anterior</a></li>&nbsp;
											<li><a onClick={this.next}>Siguiente</a></li>
										</ul>
									</nav>
								</td>
							</tr>
						</tfoot>
					</Table>
				</Box>
            </section>
        );
    }

    next()
    {
        this.page += 1;
    }

    prev()
    {
        this.page = Math.max(this.page-1, 1);
    }

    renderUsers(user)
    {
        var dateNow = moment().format('ll');
        return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{dateNow}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td>{user.email}</td>
            </tr>
        );
    }

    renderAlert()
    {
        if(this.state.alertVisible)
        {
            return(
                <Alert type={this.state.alertType}>
                    {this.state.alertMessage}
                </Alert>
            );
        }
    }
}

module.exports = ApiPage;
