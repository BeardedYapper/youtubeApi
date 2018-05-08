import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../controls/Page';
import PageHeader from '../controls/PageHeader';
import PageBody from '../controls/PageBody';

import Box from '../controls/Box/Box';
import BoxHeader from '../controls/Box/BoxHeader';
import BoxBody from '../controls/Box/BoxBody';

import Table from '../controls/Table/Table';
import TableHeader from '../controls/Table/TableHeader';

import Select from '../controls/Select/Select';
import SelectForm from '../controls/Select/SelectForm';

import Alert from '../controls/Alert';
import DirectChat from '../controls/DirectChat';
import Graphic from '../controls/Graphic';
import InfoBox from '../controls/InfoBox';
import Input from '../controls/Input/Input';
import Textarea from '../controls/Textarea';
import TimelineItem from '../controls/TimelineItem';
import TimelineItemB from '../controls/TimelineItemB';
import TimelineItemF from '../controls/TimelineItemF';
import TimelineItemH from '../controls/TimelineItemH';
import TimelineLabel from '../controls/TimelineLabel';

class HomePage extends React.Component {
  render() {
    return (
			<Page>
				<PageHeader title='Home' />
				<PageBody>
					<div className='row'>
						<div className='col-sm-3'>
							<InfoBox color='blue' icon='fa fa-battery-full' label='battery charge' value='100%'/>
						</div>
						<div className='col-sm-3'>
							<InfoBox color='red' icon='fa fa-battery-three-quarters' label='battery charge' value='75%'/>
						</div>
						<div className='col-sm-3'>
							<InfoBox color='green' icon='fa fa-battery-half' label='battery charge' value='50%'/>
						</div>
						<div className='col-sm-3'>
							<InfoBox color='yellow' icon='fa fa-battery-quarter' label='battery charge' value='25%'/>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-3'>
							<Alert type='info'><b>Alert type: </b>Info</Alert>
						</div>
						<div className='col-sm-3'>
							<Alert type='danger'><b>Alert type: </b>Danger</Alert>
						</div>
						<div className='col-sm-3'>
							<Alert type='success'><b>Alert type: </b>Success</Alert>
						</div>
						<div className='col-sm-3'>
							<Alert type='warning'><b>Alert type: </b>Warning</Alert>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6'>
							<DirectChat title='Chat' data={this.generateChatData()} disabled />
						</div>
						<div className='col-sm-6'>
							<Box>
								<BoxHeader title='Form example'/>
								<BoxBody>
									<Form alignment='horizontal' handleSubmit={this.handleSubmit}>
										<Input type='text' label='Name' placeholder='Name' name='txtName'></Input>
										<Input type='password' label='Password' placeholder='Password' name='txtPass'></Input>
										<SelectForm label='Values' selected='3' name='txtValues'>
											<option value='1'>Value 1</option>
											<option value='2'>Value 2</option>
											<option value='3'>Value 3</option>
											<option value='4'>Value 4</option>
											<option value='5'>Value 5</option>
										</SelectForm>
										<Textarea label='Description' name='txtDesc'></Textarea>
										<div className="row">
											<div className="col-xs-offset-9 col-xs-3">
												<button type="submit" className="btn btn-primary btn-block">Guardar</button>
											</div>
										</div>
									</Form>
								</BoxBody>
							</Box>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6'>
							<Box>
								<BoxHeader title='Line chart'/>
								<BoxBody>
									<Graphic type='line' data={this.generateChartData()} randColor></Graphic>
								</BoxBody>
							</Box>
						</div>
						<div className='col-sm-6'>
							<Box>
								<BoxHeader title='Timeline'/>
								<BoxBody>
									<ul className="timeline">
										<TimelineLabel color="red">10 Feb. 2014</TimelineLabel>
										<TimelineItem icon="fa fa-envelope" color="blue" time="12:05">
											<TimelineItemH><Link to="#">Support Team</Link> Message</TimelineItemH>
											<TimelineItemB>Content</TimelineItemB>
											<TimelineItemF>
												<a className="btn btn-primary btn-xs">button</a>&nbsp;
												<a className="btn btn-primary btn-xs">button</a>
											</TimelineItemF>
										</TimelineItem>

										<TimelineLabel color="blue">10 Feb. 2018</TimelineLabel>
										<TimelineItem icon="fa fa-user" color="aqua" time="11:05">
											<TimelineItemH><Link to="#">Support Team</Link> Message</TimelineItemH>
											<TimelineItemB>Content</TimelineItemB>
											<TimelineItemF>
												<a className="btn btn-primary btn-xs">button</a>&nbsp;
												<a className="btn btn-primary btn-xs">button</a>
											</TimelineItemF>
										</TimelineItem>

										<TimelineItem icon="fa fa-comments" color="purple" time="11:05">
											<TimelineItemH><Link to="#">Support Team</Link> Message</TimelineItemH>
											<TimelineItemB>Content</TimelineItemB>
											<TimelineItemF>
												<a className="btn btn-primary btn-xs">button</a>&nbsp;
												<a className="btn btn-primary btn-xs">button</a>
											</TimelineItemF>
										</TimelineItem>

										<TimelineItem icon="fa fa-clock-o" color="gray" />
									</ul>
								</BoxBody>
							</Box>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-12'>
							<Box>
								<BoxHeader title='Table'/>
								<BoxBody>
									<Table type='hover'>
										<TableHeader>
											<th>Field 1</th>
											<th>Field 2</th>
											<th>Field 3</th>
											<th>Field 4</th>
											<th>Field 5</th>
										</TableHeader>
										<tbody>
											<tr>
												<td>Data 1</td>
												<td>Data 2</td>
												<td>Data 3</td>
												<td>Data 4</td>
												<td>Data 5</td>
											</tr>
										</tbody>
									</Table>
								</BoxBody>
							</Box>
						</div>
					</div>
				</PageBody>
			</Page>
    );
	}

	generateChatData()
	{
		var data =
		[
			{
				isAssessor: false,
				name: "Alexander Pierce",
				date: "2018-03-24T02:48:55.307Z",
				message:
				[
					{
						type: "text",
						text: "Is this template really for free? That's unbelievable!"
					}
				]
			},
			{
				isAssessor: true,
				name: "Sarah Bullock",
				date: "2018-03-24T02:49:52.967Z",
				message:
				[
					{
						type: "text",
						text: "You better believe it!"
					}
				]
			}
		];
		return data;
	}

	generateChartData()
	{
		var data =
		{
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets:
			[
				{
					data: this.rand(7, 32, 250),
					backgroundColor: this.randColor(),
					label: ["Set 1"]
				},
				{
					data: this.rand(7, 32, 250),
					backgroundColor: this.randColor(),
					label: ["Set 2"]
				}
			],
		};
		return data
	}

	rand(num=1, min=0, max=255)
	{
		var rtn = [];
		while (rtn.length < num)
		{
			rtn.push(Math.floor((Math.random() * (max - min)) + min));
		}
		return (num==1) ? rtn[0] : rtn;
	}

	randColor(num=1, alpha=0.4)
	{
		var rtn = [];
		while (rtn.length < num) {
			rtn.push(`rgba(${this.rand()},${this.rand()},${this.rand()}, ${alpha})`);
		}
		return (num==1) ? rtn[0] : rtn;
	}

	handleSubmit(event)
	{
		event.preventDefault();

		const form = event.target;
		const data = new FormData(form);

		for(let name of data.keys())
		{
			const input = form.elements[name];
		}
	}
}

module.exports = HomePage;
