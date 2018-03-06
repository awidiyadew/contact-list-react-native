import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';

describe('App', () => {
  describe('TDD', () => {
    it('render first Text component with text Welcome to React Native!', () => {
      const wrapper = mount(<App/>);
      const firstText = wrapper.find(Text).at(0);
      expect(firstText.text()).toBe('Welcome to React Native!');
    });

    it('render second Text component with text To get started, edit App.js', () => {
      const wrapper = mount(<App/>);
      const firstText = wrapper.find(Text).at(1);
      expect(firstText.text()).toBe('To get started, edit App.js');
    });

    it('change state pressed when first Text element pressed', () => {
      const wrapper = mount(<App/>);
      const firstText = wrapper.find(Text).at(0);
      firstText.props().onPress();
      expect(wrapper.state().pressed).toBe(true);
    });
  });

  describe('Snapshot', () => {
    it('return App snapshot', () => {
      const app = renderer.create(<App/>).toJSON();
      expect(app).toMatchSnapshot();
    });
  });
});
