import React from 'react';
import { withRouter } from 'react-router-dom';
import SbGroup from './controls/SbGroup.jsx';
import SbLink from './controls/SbLink.jsx';

class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleItemClick(name) {
    this.setState({
      currentTab: ''
    });
  }

  handleToggle(name) {
    this.setState(prev => ({
      currentTab: prev.currentTab == name ? '' : name
    }));
  }

  isCurrentTab(tab) {
    return tab == this.state.currentTab;
  }

  render() {
    var locPath = this.props.location.pathname;
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu tree">
            <li className="header">{ 'Main navigation'.toUpperCase() }</li>
            <SbGroup
              active={ ['/v1', '/v2'].includes(locPath) }
              icon="fa fa-dashboard"
              label="Dashboard"
              name="dashboard"
              open={ this.isCurrentTab('dashboard') }
              onToggle={ this.handleToggle }>
              <SbLink to="/" label="Dashboard v1"/>
              <SbLink to="/" label="Dashboard v2"/>
            </SbGroup>
            <SbGroup
              icon="fa fa-files-o"
              label="Layout Options"
              name="layout"
              open={ this.isCurrentTab('layout') }
              onToggle={ this.handleToggle }>
              <SbLink to="/" label="Top Navigation"/>
              <SbLink to="/" label="Boxed"/>
              <SbLink to="/" label="Fixed"/>
              <SbLink to="/" label="Collapsed Sidebar"/>
            </SbGroup>
            <SbLink to="/"
              icon="fa fa-th"
              label="Widgets"
              name="widgets"
              onClick={ this.handleItemClick }/>
            <SbGroup
              icon="fa fa-pie-chart"
              label="Charts"
              name="charts"
              open={ this.isCurrentTab('charts') }
              onToggle={ this.handleToggle }>
              <SbLink to="/" label="ChartJS"/>
              <SbLink to="/" label="Morris"/>
              <SbLink to="/" label="Flot"/>
              <SbLink to="/" label="Inline charts"/>
            </SbGroup>
            <SbGroup
              icon="fa fa-laptop"
              label="UI Elements"
              name="ui"
              open={ this.isCurrentTab('ui') }
              onToggle={ this.handleToggle }>
              <SbLink to="/" label="General"/>
              <SbLink to="/" label="Icons"/>
              <SbLink to="/" label="Buttons"/>
              <SbLink to="/" label="Sliders"/>
              <SbLink to="/" label="Timeline"/>
              <SbLink to="/" label="Modals"/>
            </SbGroup>
            <SbGroup
              icon="fa fa-edit"
              label="Forms"
              name="forms"
              open={ this.isCurrentTab('forms') }
              onToggle={ this.handleToggle }>
              <SbLink to="/" label="General Elements"/>
              <SbLink to="/" label="Advanced Elements"/>
              <SbLink to="/" label="Editors"/>
            </SbGroup>
            <SbGroup
              icon="fa fa-table"
              label="Tables"
              name="tables"
              open={ this.isCurrentTab('tables') }
              onToggle={ this.handleToggle }>
              <SbLink to="/" label="Simple tables"/>
              <SbLink to="/" label="Data tables"/>
            </SbGroup>
            <SbGroup
              active={ [
                '/empty/page',
                '/empty/box',
                '/empty/form',
                '/empty/table'
              ].includes(locPath) }
              icon="fa fa-clone"
              label="Empty"
              name="empty"
              open={ this.isCurrentTab('empty') }
              onToggle={ this.handleToggle }>
              <SbLink to="/empty/page" label="Empty page"/>
              <SbLink to="/empty/box" label="Empty box"/>
              <SbLink to="/empty/form" label="Empty form"/>
              <SbLink to="/empty/table" label="Empty table"/>
            </SbGroup>
            <SbGroup
              icon="fa fa-cubes"
              label="Labs"
              name="labs"
              open={ this.isCurrentTab('labs') }
              onToggle={ this.handleToggle }>
              <SbLink to="/test" label="Test"/>
              <SbLink to="/api" label="Api"/>
              <SbLink to="/charts" label="Charts"/>
              <SbLink to="/directchat" label="Direct Chat"/>
              <SbLink to="/images" label="Images"/>
              <SbLink to="/pagination" label="Pagination"/>
              <SbLink to="/tabs" label="Tabs"/>
              <SbLink to="/timeline" label="Timeline"/>
            </SbGroup>
          </ul>
        </section>
      </aside>
    );
  }
}

module.exports = withRouter(AppSidebar);
