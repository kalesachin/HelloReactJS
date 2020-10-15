import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/CourseActions";
import PropTypes from "prop-types";
class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };

  render() {
    //return <h2>Courses</h2>;
    debugger;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          //onChange={this.handleChange.bind(this)}
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    courses: state.courses,
  };
}

/*const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);*/

//---- same as above
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//---- same as above
export default connect(mapStateToProps)(CoursesPage);
