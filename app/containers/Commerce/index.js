/*
 *
 * Commerce
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Commerce extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Commerce" meta={[ { name: 'description', content: 'Description of Commerce' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
