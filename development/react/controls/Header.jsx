import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component
{
    render()
    {
        return(
            <header className="main-header">

                <Link to="/" className="logo">
                    {/* <span className="logo-mini"><b>A</b>LT</span> */}
                    <span className="logo-lg">{this.props.title}</span>
                </Link>

                <nav className="navbar navbar-static-top" role="navigation">
                    {/* <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button" /> */}
                    <div className="navbar-custom-menu">
						{this.props.children}
					</div>
                </nav>
            </header>
        );
    }
}

module.exports = Header;
