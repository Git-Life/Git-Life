import SearchItem from '../client/components/searchitem.js';

import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;

describe('Given an instance of the SearchItem', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(<SearchItem/>);
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
    });
  });
});
