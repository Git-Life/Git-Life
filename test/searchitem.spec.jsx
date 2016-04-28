import SearchItem from '../client/components/searchitem.jsx';

import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;
var coreComponent;

describe('Given an instance of the SearchItem', () => {
  describe('when we render the component', () => {
    before(() => {
      var renderer = TestUtils.createRenderer();
      renderer.render(<SearchItem />);
      component = renderer.getRenderOutput();
    });

    it('should be wrapped in a div', () => {
      expect(component.type).to.equal('div');
    });
  });
});
