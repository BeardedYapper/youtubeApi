import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AppSidebar from './AppSidebar.jsx';
import Header from './controls/Header';
import HomePage from './pages/HomePage';
import ApiPage from './pages/ApiPage';
import ChartsPage from './pages/ChartsPage';
import DirectChatPage from './pages/DirectChatPage';
import ImagesPage from './pages/ImagesPage';
import PaginationPage from './pages/PaginationPage';
import TabsPage from './pages/TabsPage';
import TimelinePage from './pages/TimelinePage';
// pages
import DashboardPage from './pages/DashboardPage';
import TestPage from './pages/TestPage';
import Empty from './pages/Empty.jsx';
import EmptyBox from './pages/EmptyBox.jsx';
import EmptyForm from './pages/EmptyForm.jsx';
import EmptyTable from './pages/EmptyTable.jsx';

import Chanel from './pages/Chanel.jsx';
import Playlist from './pages/Playlist.jsx';
import Video from './pages/Video.jsx';

class App extends React.Component {
    render()
    {
        return(
            <HashRouter>
							<div className="wrapper">
								<div style={{height: '100%'}}>
									<Header title={<span><b>Spring</b>Labs</span>}>
										{/* {this.renderHeaderContent()} */}
									</Header>
                  <AppSidebar/>
                  <Route exact path="/empty/page" component={ Empty } />
                  <Route exact path="/empty/box" component={ EmptyBox } />
                  <Route exact path="/empty/form" component={ EmptyForm } />
                  <Route exact path="/empty/table" component={ EmptyTable } />
                  { /**/ }
									<Route exact path="/test" component={ TestPage } />
									<Route exact path="/" component={ DashboardPage } />
									<Route exact path="/home" component={HomePage} />
									<Route exact path="/api" component={ApiPage} />
									<Route exact path="/charts" component={ChartsPage} />
									<Route exact path="/directchat" component={DirectChatPage} />
									<Route exact path="/images" component={ImagesPage} />
									<Route exact path="/pagination" component={PaginationPage} />
									<Route exact path="/tabs" component={TabsPage} />
									<Route exact path="/timeline" component={TimelinePage} />

									<Route exact path="/chanel" component={Chanel}/>
									<Route exact path="/playlist/:id" component={Playlist}/>
									<Route exact path="/video/:id" component={Video}/>
								</div>
							</div>
            </HashRouter>
        );
    }

	renderHeaderContent()
	{
		return(
			<ul className="nav navbar-nav">
				<li className="dropdown messages-menu">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						<i className="fa fa-envelope-o"></i>
						<span className="label label-success">4</span>
					</a>
					<ul className="dropdown-menu">
						<li className="header">You have 4 messages</li>
						<li>
							<ul className="menu">
								<li>
									<a href="#">
										<div className="pull-left">
											<img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
										</div>
										<h4>
											Support Team
											<small><i className="fa fa-clock-o"></i> 5 mins</small>
										</h4>
										<p>Why not buy a new awesome theme?</p>
									</a>
								</li>
							</ul>
						</li>
						<li className="footer"><a href="#">See All Messages</a></li>
					</ul>
				</li>

				<li className="dropdown notifications-menu">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						<i className="fa fa-bell-o"></i>
						<span className="label label-warning">10</span>
					</a>
					<ul className="dropdown-menu">
						<li className="header">You have 10 notifications</li>
						<li>
							<ul className="menu">
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua"></i> 5 new members joined today
									</a>
								</li>
							</ul>
						</li>
						<li className="footer"><a href="#">View all</a></li>
					</ul>
				</li>
				<li className="dropdown tasks-menu">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						<i className="fa fa-flag-o"></i>
						<span className="label label-danger">9</span>
					</a>
					<ul className="dropdown-menu">
						<li className="header">You have 9 tasks</li>
						<li>
							<ul className="menu">
								<li>
									<a href="#">
										<h3>
											Design some buttons
											<small className="pull-right">20%</small>
										</h3>
										<div className="progress xs">
											<div className="progress-bar progress-bar-aqua" style={{width: `20%`}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
												<span className="sr-only">20% Complete</span>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li className="footer">
							<a href="#">View all tasks</a>
						</li>
					</ul>
				</li>
				<li className="dropdown user user-menu">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						<img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
						<span className="hidden-xs">Alexander Pierce</span>
					</a>
					<ul className="dropdown-menu">
						<li className="user-header">
							<img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

							<p>
								Alexander Pierce - Web Developer
								<small>Member since Nov. 2012</small>
							</p>
						</li>
						<li className="user-body">
							<div className="row">
								<div className="col-xs-4 text-center">
									<a href="#">Followers</a>
								</div>
								<div className="col-xs-4 text-center">
									<a href="#">Sales</a>
								</div>
								<div className="col-xs-4 text-center">
									<a href="#">Friends</a>
								</div>
							</div>
						</li>
						<li className="user-footer">
							<div className="pull-left">
								<a href="#" className="btn btn-default btn-flat">Profile</a>
							</div>
							<div className="pull-right">
								<a href="#" className="btn btn-default btn-flat">Sign out</a>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
				</li>
			</ul>
		);
	}
}

module.exports = App;
