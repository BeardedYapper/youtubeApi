import React from 'react';
import {Link} from 'react-router-dom';

class MenuItem extends React.Component
{
    render()
    {
        if(this.props.type == 'treeview')
        {
            return(
                <li className="treeview menu-open">
                    <Link to={this.props.link || '/'}>
                        {this.renderIcon()}
                        {this.props.title}
						<span className='pull-right-container'>
							<i className='fa fa-angle-left pull-right' />
						</span>
                    </Link>
                    <ul className="treeview-menu" style={{ display: 'block' }}>
                        {this.props.children}
                    </ul>
                </li>
            );
        }
        else
        {
            return(
                <li>
                    <Link to={this.props.link || '/'}>
                        {this.renderIcon()}
                        {this.props.children}
                    </Link>
                </li>
            );
        }
    }

    renderIcon()
    {
        if(this.props.icon)
        {
            return(
                <i className={this.props.icon}/>
            );
        }
    }
}

module.exports = MenuItem;
