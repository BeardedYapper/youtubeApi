import React from 'react';

import Box from './../controls/Box.js';
import Form from './../controls/Form.js';
import Input from './../controls/Input.js';

class ImagesPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			url: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event)
	{
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onloadend = () =>
		{
			this.setState({
				url: reader.result
			})
		}
	}

	render()
	{
		return(
			<section className="content">
				<Box>
					<Form alignment='horizontal'>
						<div className="form-group">
		                    <div className="col-sm-offset-4 col-sm-8">
		                        <img src={this.state.url} width='100%'/>
		                    </div>
		                </div>
						<div className="form-group">
		                    <div className="col-sm-offset-4 col-sm-8">
		                        <input type="file" onChange={this.handleChange} />
		                    </div>
		                </div>
					</Form>
				</Box>
			</section>
		);
	}
}

module.exports = ImagesPage;
