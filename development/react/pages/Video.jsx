import React from 'react';
import moment from 'moment';
import Api from '../Api';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';
import BoxHeader from '../controls/Box/BoxHeader';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';
import Pagination from '../controls/Pagination.jsx';



class Video extends React.Component {
  constructor(props) {
    super(props);
    this.api= new Api();
    this.state = {
      page: 1,
      videos: []
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
    this.api.videoList ({
        key: 'AIzaSyBr_0ZVUHKAOczS-O3QczKlYzmRGD28HBQ',
        part: 'snippet,player',
        maxResults: 50,
        id: this.props.match.params.id
       }).then(data =>{
        console.log(data);
        this.setState({
            videos: data.items
        });
       });
  }

  render() {
    return (
      <Page>
        <PageHeader title="Videos"
          subtitle=""/>
        <PageBody>
          <Box>
            <BoxBody>
            <table className="table">
            <tbody>
              {this.state.videos.map(this.img)}
              </tbody>
              </table>
              <table className="table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Titulo</th>
                    <th>descripción</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.videos.map(this.renderRow) }
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

  renderRow(video) {
   
    return (
      <tr key={ video.id }>
        <td>{ video.id }</td>
        <td>{ video.snippet.title }</td>
        <td>{ video.snippet.description }</td>
      </tr>
    );
  }
  img(video){
    
    var url=video.snippet.thumbnails.default.url;
    var thisIsMyCopy= video.player.embedHtml;
       return(
    <tr key={video.id}>
    <td><img src={url}/></td>
    <td><div className="content" dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div></td>
    </tr>
    );
  }
}

module.exports = Video;