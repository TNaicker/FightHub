import React from 'react';
import AppHead from './components/header';
import AppFooter from './components/footer';
import AppBody from './components/body';
import ScrollUpButton from "react-scroll-up-button";

export default React.createClass({
  render: function () {
    return (
      <div>
        <AppHead/>
          <ScrollUpButton ContainerClassName="scroll"/>
          { this.props.children }
        <AppFooter/>
      </div>
    );
  }
})
