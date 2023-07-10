import React, { Component } from 'react';
import'./style.js'
import{Drop,DropTitle,DropTitleSpan,Form,FormInput,InputTexte,InputEmail,InputSup,TextArea,InputSubmit} from './style.js'
import Footer from './../footer'
class Contact extends Component {
  
  render () {
    return (
     <React.Fragment>
     <Drop>
            <div className="container">
                <DropTitle><DropTitleSpan>Drop </DropTitleSpan>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputTexte type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputSup type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>
        <Footer/>
        </React.Fragment>
    )
 }
}


 export default Contact;