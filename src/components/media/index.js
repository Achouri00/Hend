import React, { Component } from 'react';
import  {SocialMedia,Face,Twitter,Pin,Icon,SocialText,Span,Info2} from './style.js'

class Media extends Component {
  
  render () {
    return (
        <SocialMedia>
              
        <Face>
            <Icon className=''></Icon>
            <SocialText>
                <Span>Follow Me on</Span>
                <Info2>Social Facebook</Info2>
            </SocialText>
        </Face>
        
        <Twitter>
            <Icon></Icon>
            <SocialText>
                <Span>Tweet Me on</Span>
                <Info2>Social twitter</Info2>
            </SocialText>
        </Twitter>
        
        <Pin>
            <Icon></Icon>
            <SocialText>
                <Span>Pin Me on</Span>
                <Info2>Social Pinterest</Info2>
            </SocialText>
        </Pin>
    </SocialMedia>
    )
 }
}


 export default Media;