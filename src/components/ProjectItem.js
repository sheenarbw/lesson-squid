import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {
    return (
      <div className="ProjectItem">
            {this.props.project.title}
      </div>
    );
  }
}

export default ProjectItem;
