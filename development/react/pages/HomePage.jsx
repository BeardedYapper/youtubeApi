import React from 'react';
import {Link} from 'react-router-dom';

import Alert from './../controls/Alert.jsx';
import Box from './../controls/Box.jsx';
import DirectChat from './../controls/DirectChat.jsx';
import Form from './../controls/Form.jsx';
import Graphic from './../controls/Graphic.jsx';
import InfoBox from './../controls/InfoBox.jsx';
import Input from './../controls/Input.jsx';
import Select from './../controls/Select.jsx';
import Table from './../controls/Table.jsx';
import Textarea from './../controls/Textarea.jsx';
import TimelineItem from './../controls/TimelineItem.jsx';
import TimelineItemB from './../controls/TimelineItemB.jsx';
import TimelineItemF from './../controls/TimelineItemF.jsx';
import TimelineItemH from './../controls/TimelineItemH.jsx';
import TimelineLabel from './../controls/TimelineLabel.jsx';

class HomePage extends React.Component
{
    render()
    {
        return(
            <section className="content">
				{/* ************* InfoBox ************* */}
				<div className='row'>
					<div className='col-sm-3'>
						<InfoBox color='blue' icon='fa fa-battery-full' title='battery charge'>100%</InfoBox>
					</div>
					<div className='col-sm-3'>
						<InfoBox color='red' icon='fa fa-battery-three-quarters' title='battery charge'>75%</InfoBox>
					</div>
					<div className='col-sm-3'>
						<InfoBox color='green' icon='fa fa-battery-half' title='battery charge'>50%</InfoBox>
					</div>
					<div className='col-sm-3'>
						<InfoBox color='yellow' icon='fa fa-battery-quarter' title='battery charge'>25%</InfoBox>
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
						<Box title='Form example'>
							<Form alignment='horizontal' handleSubmit={this.handleSubmit}>
								<Input type='text' label='Name' placeholder='Name' name='txtName'></Input>
								<Input type='password' label='Password' placeholder='Password' name='txtPass'></Input>
								<Select label='Values' selected='3' name='txtValues'>
									<option value='1'>Value 1</option>
									<option value='2'>Value 2</option>
									<option value='3'>Value 3</option>
									<option value='4'>Value 4</option>
									<option value='5'>Value 5</option>
								</Select>
								<Textarea label='Description' name='txtDesc'></Textarea>
								<div className="row">
									<div className="col-xs-offset-9 col-xs-3">
										<button type="submit" className="btn btn-primary btn-block">Guardar</button>
									</div>
								</div>
							</Form>
						</Box>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-6'>
						<Box title='Line chart'>
							<Graphic type='line' data={this.generateChartData()} randColor></Graphic>
						</Box>
					</div>
					<div className='col-sm-6'>
						<Box title='Timeline'>
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
						</Box>
					</div>
				</div>
				<div className='row'>
					<Box title='Table'>
						<Table type='hover'>
							<thead>
								<tr>
									<th>Field 1</th>
									<th>Field 2</th>
									<th>Field 3</th>
									<th>Field 4</th>
									<th>Field 5</th>
								</tr>
							</thead>
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
					</Box>
				</div>
            </section>
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
			console.log(input);
		}
	}
}

module.exports = HomePage;
