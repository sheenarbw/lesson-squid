import React, { Component } from 'react';
import '../styles/App.css';
import ProjectItem from './ProjectItem';

import projects from '../content/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Lesson Squid
        </header>
        {
            projects.map((project,index)=>(
                <ProjectItem project={project} key={index}/>
            ))
        }
      </div>
    );
  }
}

export default App;




