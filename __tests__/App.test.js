import React from 'react';
import App from '../src/components/App';
import { shallow } from 'enzyme';
import ContactForm from '../src/components/ContactForm';
import ContactFilter from '../src/components/ContactFilter';
import ContactsList from '../src/components/ContactsList';
import Button from '../src/components/Button';


describe('App', () => {
  describe('render', () => {
    it('render children ContactForm, ContactFilter, and ContactsList', () => {
      const wrapper = shallow(<App/>);
      const contactForm = wrapper.find(ContactForm);
      const contactFilter = wrapper.find(ContactFilter);
      const contactList = wrapper.find(ContactsList);
      expect(contactForm.length).toBe(1);
      expect(contactFilter.length).toBe(1);
      expect(contactList.length).toBe(1);
    });
  });

  describe('#onSaveContact', () => {
    it('add contact to state.contacts when function invoked', () => {
      const wrapper = shallow(<App contacts={[]}/>);
      expect(wrapper.state().contacts.length).toBe(0);
      wrapper.instance().onSaveContact('Dewa', 'awidiya.dewa@gmail.com');
      wrapper.instance().onSaveContact('Dewa', 'awidiya.dewa@gmail.com');
      expect(wrapper.state().contacts.length).toEqual(2);
    });

    it('add contact to state.contacts when function invoked', () => {
      const wrapper = shallow(<App contacts={[]}/>);
      wrapper.instance().onSaveContact('Dewa', 'awidiya.dewa@gmail.com');
      expect(wrapper.state().contacts).toEqual([{name: 'Dewa', email: 'awidiya.dewa@gmail.com'}]);
    });

    it('integration test with child ContactForm when save button clicked will change parent state', () => {
      const wrapperParent = shallow(<App contacts={[]}/>);
      const wrapperChild = wrapperParent.find(ContactForm).shallow();
      expect(wrapperParent.state().contacts.length).toBe(0);
      const buttonSave = wrapperChild.find(Button);
      const contactInput = { name: 'Dewa', email: 'awidiya.dewa@gmail.com' };
      wrapperChild.setState(contactInput);
      buttonSave.props().onPress();
      expect(wrapperParent.state().contacts.length).toBe(1);
      expect(wrapperParent.state().contacts).toEqual([contactInput]);
    });
  });
});
