import React from 'react';

class InfoBox extends React.Component
{
    render()
    {
        var cnColor = `info-box-icon bg-${this.props.color}`;
        return(
            <div className="info-box">
                <span className={cnColor}><i className={this.props.icon}></i></span>
                <div className="info-box-content">
                    <span className="info-box-text">{this.props.title}</span>
                    <span className="info-box-number">{this.props.children}</span>
                </div>
            </div>
        );
    }
}

module.exports = InfoBox;
