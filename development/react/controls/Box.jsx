import React from 'react';

class Box extends React.Component
{
    render()
    {
        return(
            <div className="box">
                <div className="box-header with-border">
                    <div className="box-title">{this.props.title}</div>
                </div>
                <div className="box-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = Box;
