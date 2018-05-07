import React from 'react';

class Select extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			selected: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount()
	{
		if(this.props.selected)
		{
			this.setState({
				selected: this.props.selected
			});
		}
	}

	render()
	{
		var disabled = false;

		if(this.props.disabled)
		{
			disabled = true;
		}
		return(
			<div className="form-group">
				<label className="col-sm-4 control-label">{this.props.label}</label>
				<div className="col-sm-8">
					<select value={this.state.selected} className="form-control" disabled={disabled} onChange={this.onChange}>
						{this.props.children}
					</select>
				</div>
			</div>
		);
	}

	onChange(e)
	{
		this.setState({
			selected: e.target.value
		});
	}
}

module.exports = Select;
