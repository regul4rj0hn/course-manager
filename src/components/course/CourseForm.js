import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onCancel, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <input
        type="button"
        name="cancel"
        value="Cancel"
        className="btn btn-secondary btn-space"
        onClick={onCancel}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary btn-space"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
