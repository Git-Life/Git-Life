import SearchItem from '../client/components/searchitem.jsx';

import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;

describe('Given an instance of the SearchItem', () => {
  describe('when we render the component', () => {


    it('should do a thing', () => {
      var renderer = TestUtils.createRenderer();
      renderer.render(<SearchItem />);
      var subject = renderer.getRenderOutput();

    //expect(2).to.be(2);
    expect('test').to.be.a('string');
  });

  });
});
