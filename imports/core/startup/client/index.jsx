import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Home from '../../ui/pages/Home.jsx';

Meteor.startup(() => {
  render(<Home />, document.getElementById('app'));
});
