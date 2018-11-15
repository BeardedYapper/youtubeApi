import React from 'react';
import Api from '../Api';
import {Link} from 'react-router-dom';
import Alert from '../controls/Alert';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxHeader from '../controls/Box/BoxHeader';
import InputForm from '../controls/Input/InputForm';


class Chanel extends React.Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      alertVisible: false,
      username: '',
      id: '',
      chanels: []
    };
    this.create = this.create.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  create() {
      this.api.chanelList({
        key: 'AIzaSyBr_0ZVUHKAOczS-O3QczKlYzmRGD28HBQ',
        part: 'snippet,contentDetails',
        forUsername: this.state.username
      }).then(data =>{
        console.log(data);
        this.setState({
            chanels: data.items
        });
      });   
  }
  

  render() {
    return (
      <Page>
        <PageHeader title="Buscar Canal de Youtube"
          subtitle=""/>
        <PageBody>
          <div className="row">
            <div className="col-sm-8">
              <Box>
                <BoxHeader title="info"/>
                <BoxBody>

                <form className="form-horizontal">
                <div className="form-group">
                <InputForm
                      label="UserName"
                      name="username"
                      type="text"
                      value={ this.state.username }
                      onChange={ this.onInputChange }
                      style={{ marginRight: 8, marginLeft: 8 }}/>
                 </div>
                 <div className="form-group">
                {/*    <InputForm
                      label="Id"
                      name="id"
                      type="text"
                      value={ this.state.id }
                      onChange={ this.onInputChange }
                style={{ marginRight: 8, marginLeft: 8 }}/> */}
                    <div className="form-group">
                      <div className="col-sm-offset-4 col-sm-8">
                        <button className="btn btn-primary"
                          type="button"
                          onClick={ this.create }>Buscar</button>
                      </div>
                    </div>
                    </div>
                  </form>

                    <div>
                   <table className="table">
                <thead>
                  <tr>
                    <th>chanel id</th>
                    <th>playlist</th>
                    <th>kind</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.chanels.map(this.renderRow) }
                </tbody>
              </table>
              </div>
                </BoxBody>
              </Box>
            </div>
          </div>
        </PageBody>
      </Page>
    );
  }

  renderRow(chanel) {
    var userUrl = `/playlist/${  chanel.contentDetails.relatedPlaylists.uploads }`;
    return (
      <tr key={ chanel.id }>
        <td>{ chanel.id }</td>
        <td><Link to ={ userUrl} > { chanel.contentDetails.relatedPlaylists.uploads }</Link></td>
        <td>{ chanel.kind }</td>
      </tr>
    );
  }

 
}

module.exports = Chanel;