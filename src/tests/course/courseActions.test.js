import expect from 'expect';
import * as courseActions from '../../actions/courseActions';
import * as types from '../../actions/actionTypes';
// For Thunk testing
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action...kinda trivial, doesn't seem very useful
describe('Course Actions', () => {
  describe('createCoursesSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});

// Test a thunk with nock (no need for it since we are not calling a remote API)
// Will run slow since we have a delay of 1 second set up for our API
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create AJAX_CALL_BEGIN and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // nock('http://exampleapi.com/')
    // .get('/courses')
    // .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.AJAX_CALL_BEGIN},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];
    const store = mockStore({courses: []}, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.AJAX_CALL_BEGIN);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
