import React from 'react';

import Page from '../controls/Page';
import PageHeader from '../controls/PageHeader';
import PageBody from '../controls/PageBody';

import Box from '../controls/Box/Box';
import BoxHeader from '../controls/Box/BoxHeader';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';

import Table from '../controls/Table/Table';
import TableHeader from '../controls/Table/TableHeader';

class TestPage extends React.Component {
	render() {
		return (
			<Page>
				<PageHeader title="Test" subtitle="Preview sample"/>
				<PageBody>
					<Box>
						<BoxHeader title='BoxHeader'>
							<div className='row'>
								<div className='col-sm-6'>Tool 1</div>
								<div className='col-sm-6'>Tool 2</div>
							</div>
						</BoxHeader>
						<BoxBody>
							BoxBody
						</BoxBody>
						<BoxFooter>
							BoxFooter
						</BoxFooter>
					</Box>
					<Box>
						<BoxBody>
							<div>cosas</div>
							<Table type='hover'>
								<TableHeader>
									<th>Text_header no 1</th>
									<th>Text_header no 2</th>
									<th>Text_header no 3</th>
									<th>Text_header no 4</th>
									<th>Text_header no 5</th>
								</TableHeader>
								<tbody>
									<tr>
										<td>Text body sample 1</td>
										<td>Text body sample 2</td>
										<td>Text body sample 3</td>
										<td>Text body sample 4</td>
										<td>Text body sample 5</td>
									</tr>
									<tr>
										<td>Text body sample 1</td>
										<td>Text body sample 2</td>
										<td>Text body sample 3</td>
										<td>Text body sample 4</td>
										<td>Text body sample 5</td>
									</tr>
									<tr>
										<td>Text body sample 1</td>
										<td>Text body sample 2</td>
										<td>Text body sample 3</td>
										<td>Text body sample 4</td>
										<td>Text body sample 5</td>
									</tr>
									<tr>
										<td>Text body sample 1</td>
										<td>Text body sample 2</td>
										<td>Text body sample 3</td>
										<td>Text body sample 4</td>
										<td>Text body sample 5</td>
									</tr>
								</tbody>
							</Table>
						</BoxBody>
					</Box>
				</PageBody>
			</Page>
		);
	}
}

module.exports = TestPage;
