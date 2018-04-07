import React, { Component } from 'react';
import '../App.css';
import Skills from "../components/skills";
import Experience from '../components/experience';
import Splash from "../components/splash";

class Info extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    return (
<div className="contentWrap">
      <div className="experienceWrapper">
      <section className="zero" id="splash">


      <Splash />

      </section>
        <section className="one" id="about">


          <div className="wrapper">
            <div className='flowerContainer'>
              <img id="flower0B" src={require("./logos/Orangeblossom.png")} alt='flower'/>
              <img id="flower1B" src={require("./logos/Orangeblossom.png")} alt='flower'/>
              <img id="flower2B" src={require("./logos/Orangeblossom.png")} alt='flower'/>
              <img id="flower3B" src={require("./logos/Orangeblossom.png")} alt='flower'/>
            </div>

            <div className='contentHeader'>
              <h1 className="linethru">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque vitae dictum erat.</p>
            </div>

            <img id="flamingo" src={require("./logos/flamingo.png")} alt='flamingo'/>

          </div>


        </section>

        <section className="two" id="skills">

          <Skills />
        </section>

        <section className="three" id="experience">

          <Experience />
        </section>
      </div>
    </div>
    );
  }
}

export default Info;
