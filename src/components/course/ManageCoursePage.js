import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
      <CourseForm
        course={this.state.course}
        allAuthors={[]}
        errors={this.state.errors} />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {id:'', watchHref:'', title:'', authorId:'', length: '', category:'' };
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
