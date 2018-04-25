import React from 'react';
import moment from 'moment';

class DirectChat extends React.Component
{
	constructor(props)
	{
		super(props);
		this.renderMessages = this.renderMessages.bind(this);
	}

	render()
	{
		return(
			<div className="box box-primary direct-chat direct-chat-primary">
				<div className="box-header with-border">
					<h3 className="box-title">{this.props.title}</h3>
					{/* <div className="box-tools pull-right">
						<span data-toggle="tooltip" title="3 New Messages" className="badge bg-red">3</span>
						<button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
						<button className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle"><i className="fa fa-comments"></i></button>
						<button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
					</div> */}
				</div>
				<div className="box-body">
					<div className="direct-chat-messages" style={{height: this.props.height}}>
						{/* {this.data2.map(this.renderMessages)} */}
						{this.props.data.map(this.renderMessages)}
					</div>
				</div>
				<div className="box-footer">
					<div className="input-group">
						<input type="text" name="message" placeholder="Type Message ..." className="form-control" disabled={this.props.disabled} />
						<span className="input-group-btn">
							<button type="button" className="btn btn-primary btn-flat" disabled={this.props.disabled}>Send</button>
						</span>
					</div>
				</div>
			</div>
		);
	}

	renderMessages(user)
	{
		var directChatClassName = 'direct-chat-msg';
		var spanNameClassName = 'direct-chat-name pull-left';
		var spanDateClassName = 'direct-chat-timestamp pull-right';
		var color = '';
		var role = '';
		if(user.isAssessor)
		{
			directChatClassName = 'direct-chat-msg right';
			spanNameClassName = 'direct-chat-name pull-right';
			spanDateClassName = 'direct-chat-timestamp pull-left';
			color = '#FFFFFF';
			role = 'Assessor: ';
		}
		return(
			<div className={directChatClassName}>
				<div className="direct-chat-info clearfix">
					<span className={spanNameClassName}>{`${role}${user.name} `}</span>
				</div>
				{user.message.map(
					x => this.renderContent(x, color)
				)}
			</div>
		);
	}

	renderContent(message, color)
	{
		var time = moment(message.date).format('h:mm A');
		// var time = message.date;
		if(message.type == 'image')
		{
			return(
				<div className="direct-chat-text">
					<div className="row">
						<div className="col-sm-9">
							<img src={message[message.type]} alt="message user image" width='75%' />
						</div>
						<div className="col-sm-3">
							<span className="direct-chat-timestamp pull-right" style={{color: color, fontSize: 'x-small'}}>{time}</span>
						</div>
					</div>
				</div>
			);
		}
		else
		{
			return(
				<div className="direct-chat-text">
					<div className="row">
						<div className="col-sm-9">
							{message[message.type]}
						</div>
						<div className="col-sm-3">
							<span className="direct-chat-timestamp pull-right" style={{color: color, fontSize: 'x-small'}}>{time}</span>
						</div>
					</div>
				</div>
			);
		}
	}
}

module.exports = DirectChat;
