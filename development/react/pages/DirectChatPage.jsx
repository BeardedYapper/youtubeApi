import React from 'react';
import axios from 'axios';

import DirectChat from './../controls/DirectChat.jsx';

class DirectChatPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			chatData: [],
		}
		this.processData = this.processData.bind(this);
	}

	componentDidMount()
	{
		axios.get('static/chats.txt')
		.then(result => {
			this.setState({
				chatData: result.data
			})
			this.processData();
		})
		.catch(error => {
			this.setState({
				chatData: []
			})
		});
	}

    render()
    {
        return(
            <section className="content">
				<DirectChat title="Chat directo" data={this.state.chatData} height='500px' disabled></DirectChat>
            </section>
        );
    }

	processData()
	{
		var data = [{}];
		var count = 0;
		this.state.chatData.map(
			c => {
				// console.log(c);
				if(c.name != data[count].name)
				{
					count += 1;
					data[count] = c;

					data[count].message.map(
						x => x.date = data[count].date
					);
					delete data[count].date;
				}
				else
				{
					c.message.map(
						x => {
							var obj = {};
							obj.type = x.type;
							obj[obj.type] = x[x.type];
							obj.date = c.date;
							data[count].message.push(obj);
						}
					);

				}
			}
		);
		data.splice(0, 1);
		this.setState({
			chatData: data
		});
	}
}

module.exports = DirectChatPage;
