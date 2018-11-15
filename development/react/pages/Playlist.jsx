import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Api from '../Api';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';
import BoxHeader from '../controls/Box/BoxHeader';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';
import Pagination from '../controls/Pagination.jsx';


class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      page: 1,
      playlists: []
    };
    this.goPage = this.goPage.bind(this);
  }

  componentDidMount() {
    this.search(1);
  }

  goPage(p) {
    this.search(p);
  }

  search(p) {
   this.api.playList({
    key: 'AIzaSyBr_0ZVUHKAOczS-O3QczKlYzmRGD28HBQ',
    part: 'contentDetails',
    maxResults: 50,
    playlistId: this.props.match.params.id
   }).then(data =>{
    console.log(data);
    this.setState({
        playlists: data.items
    });
   });
  }

  render() {
    return (
      <Page>
        <PageHeader title="Playlist"
          subtitle=""/>
        <PageBody>
          <Box>
            <BoxHeader title=""/>
            <BoxBody>
              <table className="table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>videoId</th>
                    <th>kind</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.playlists.map(this.renderRow) }
                </tbody>
              </table>
            </BoxBody>
            <BoxFooter>
              <Pagination
                page={ this.state.page }
                onGoPage={ this.goPage }/>
            </BoxFooter>
          </Box>
        </PageBody>
      </Page>
    );
  }

  renderRow(play) {
      var url = `/video/${ play.contentDetails.videoId }`
    return (
      <tr key={ play.id }>
        <td>{ play.id }</td>
        <td><Link to={url}>{ play.contentDetails.videoId }</Link></td>
        <td>{ play.kind }</td>
      </tr>
    );
  }
}

module.exports = Playlist;
