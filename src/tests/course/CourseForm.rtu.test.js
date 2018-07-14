import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../../components/course/CourseForm';

// These tests are using react-test-utils, which requires some setup.
// Please see the Enzyme test for a nicer way to unit test components.

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[6]; //fragile, if the form changes this breaks
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." while saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[6]; //bad
    expect(submitButton.props.value).toBe('Saving...');
  });
});
