import React, { Component } from 'react';
import './style.js'
import {ProfileSkills,Profile1 ,ProfileList,ProfileItem,ProfileItemSpan,ProfileItemSpanWeb,Skills,SkillsDesc,Bar,BarTitle,BarPerc,BarParent,BarParentSpan,BarParentSpanSp1,BarParentSpanSp2,BarParentSpanSp3,ProfileTitle,SkillsTitle,ProfileTitleSpan,SkillsTitleSpan} from './style.js'

class Profile extends Component {
  
  render () {
    return (
    <ProfileSkills>
      <div className="container">
        <Profile1>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <ProfileItemSpan>Name</ProfileItemSpan>
              Hamza Nabil
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Birthday</ProfileItemSpan>
              21/1/1996
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Address</ProfileItemSpan>
              Ain shams
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Phone</ProfileItemSpan>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Email</ProfileItemSpan>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Website</ProfileItemSpan>
              <ProfileItemSpan className="web">www.google.com</ProfileItemSpan>
            </ProfileItem>
          </ProfileList>
        </Profile1>
       
        <Skills>
          <SkillsTitle>
            Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          <Bar>
            <BarTitle>Bootstrap</BarTitle>
            <BarPerc>100%</BarPerc>
            <BarParent>
              <BarParentSpanSp1/>
            </BarParent>
          </Bar>
         
          <Bar>
            <BarTitle>CSS3</BarTitle>
            <BarPerc>90%</BarPerc>
            <BarParent>
              <BarParentSpanSp2 />
            </BarParent>
          </Bar>
         
          <Bar>
            <BarTitle>Photoshop</BarTitle>
            <BarPerc>80%</BarPerc>
            <BarParent>
              <BarParentSpanSp3 />
            </BarParent>
          </Bar>
         
        </Skills>
      </div>
    
    </ProfileSkills>
    
    )
 }
}


 export default Profile;
