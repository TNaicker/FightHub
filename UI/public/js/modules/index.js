import React from 'react';
import AppHead from './components/header';
import AppFooter from './components/footer';
import AppBody from './components/body';

export default React.createClass({
  render: function () {
    return (
      <div>
        <AppHead/>
          { this.props.children }
        <AppFooter/>
      </div>
    );
  }
})
