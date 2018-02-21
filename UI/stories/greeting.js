const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;

// You pass in the module so it can export
//   the story you describe
storiesOf('A Greeting', module) // Start stories
  .add('with Hello', () => (
     <h1>
       Hellos...
     </h1>
  ));
