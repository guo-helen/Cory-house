import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>P A</h1>
        <p>React, Redux and React Rounter. </p>
        <Link to="about" className="btn btn-primary">Learn more</Link>
      </div>
    )
  }
}

export default HomePage;



