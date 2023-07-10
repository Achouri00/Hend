import React, { Component } from 'react';
import axios from 'axios';
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from './style.js'

class Work extends Component {
  state = {
    works: []
  }

  componentDidMount() {
    axios.get('js/data.json').then(res => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;

    const WorksList = works.map(WorkItem => {
      return (
        <WorkPart firsr={WorkItem.id} key={WorkItem.id}>
          <Icon className={WorkItem.icon_name}></Icon>
          <PartTitle>{WorkItem.title}</PartTitle>
          <Line />
          <PartDesc>
            {WorkItem.body}
          </PartDesc>
        </WorkPart>
      );
    });

    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {WorksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
