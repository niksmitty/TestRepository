import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';

import Header from './common/Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(data) {
    this.setState({
      data
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Grid>
          {React.cloneElement(this.props.children, { data: this.state.data, setData: this.updateData })}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
