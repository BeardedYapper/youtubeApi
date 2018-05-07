import React from 'react';
import Box from './Box/Box';

class Table extends React.Component
{
    render()
    {
        var type = "table";
        if(this.props.type != null)
        {
            type += " " + this.props.type;
        }
        return(
            <table className={type}>
                {this.props.children}
            </table>
        );
    }
}

module.exports = Table;
