import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from '../components/course/CourseForm';

// Enzyme is an Airbnb library for tests in react.

function setup(saving) {
  const props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1); //expect to only find one form
    expect(wrapper.find('h1').text()).toEqual('Manage Course'); //expect the title to be x
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('[name="save"]').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." while saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('[name="save"]').props().value).toBe('Saving...');
  });
});
