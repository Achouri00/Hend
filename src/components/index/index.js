import React ,{Component} from 'react' ;



import About from './../about';
import Footer from './../footer';
import Home from './../home';
import Media from './../media';
import Portfolio from './../portfolio';
import Profile from './../profile';
import Work from './../work';







class Index extends Component {
  
   render () {
     return (
       <div>
    
       
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <Media/>
        <Footer/>
      
       
       
       </div>
     )
  }
}
 
 
  export default Index;
