import React, { Component } from 'react';
import './style.js'
import {CreativeContainer,CreativeInfo,InfoTitle,InfoTitleSpan,InfoDir,InfoDesc,InfoDescLink,} from './style.js';

class About extends Component {
  
  render () {
    return (
      <CreativeContainer>
            <div class="container">
                <CreativeInfo>
                    <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescLink href="#">explicabo</InfoDescLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeContainer>
    )
 }
}


 export default About;
