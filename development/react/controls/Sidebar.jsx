import React from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <aside className="main-sidebar">
                <section className="sidebar">

					{/* <div className="user-panel">
						<div className="pull-left image">
							<img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
						</div>
						<div className="pull-left info">
							<p>Alexander Pierce</p>
							<a href="#"><i className="fa fa-circle text-success"></i> Online</a>
						</div>
					</div> */}

					<ul className="sidebar-menu" data-widget="tree">
						<li className="header">{this.props.title}</li>
						{this.props.children}
					</ul>
                </section>
            </aside>
        );
    }
}

module.exports = Sidebar;
