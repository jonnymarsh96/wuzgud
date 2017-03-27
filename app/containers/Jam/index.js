/*
 *
 * Jam
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Jam extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Jam" meta={[ { name: 'description', content: 'Description of Jam' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
