import React, { Component } from 'react';
import '../App.css';

class Splash extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Splash");

}
  render() {
    return (
      <div className="backgroundImage">
      <img id="flower0A" src={require("./logos/lotusflower.png")} alt='flower'/>
      <img id="flower1A" src={require("./logos/lotusflower.png")} alt='flower'/>
      <img id="flower2A" src={require("./logos/lotusflower.png")} alt='flower'/>
      <img id="flower3A" src={require("./logos/lotusflower.png")} alt='flower'/>

      <div className="backgroundSplash">
        <img id="water" src={require("./logos/pool_water.jpg")}alt='WATTA'/>

        <div className="container">
          <img id="tiger"src={require("./logos/tigercrop.png")} alt='tiger'/>
          <svg>
            <filter id="glitch">
              <feColorMatrix in="SourceGraphic" type="matrix"
                values="1   0   0   0   0
                        0   0   0   0   0
                        0   0   0   0   0
                        0   0   0   1   0 "
                result="red"/>
              < feColorMatrix in = "SourceGraphic"
        type = "matrix"
        values = "0   0   0   0   0
        0 1 0 0 0
        0 0 0 0 0
        0 0 0 1 0 "
        result = "green" / >
          <
          feColorMatrix in = "SourceGraphic"
        type = "matrix"
        values = "0   0   0   0   0
        0 0 0 0 0
        0 0 1 0 0
        0 0 0 1 0 "
        result = "blue" / >
          <
          feOffset in = "red"
        result = "red"
        dx = "0" >
          <
          animate attributeName = "dx"
        attributeType = "XML"
        values = "  -6;  2; 0; 0; 0; 0; 0;0;0;0;0;"
        dur = "1.9s"
        repeatCount = "indefinite" / >
          <
          animate attributeName = "dy"
        attributeType = "XML"
        values = "-3;  2; 0; 0; 0; 0; 0;0;0;0;0;"
        dur = "2s"
        repeatCount = "indefinite" / >
          <
          /feOffset> <
          feOffset in = "green"
        result = "green"
        dx = "0" >
          <
          animate attributeName = "dx"
        attributeType = "XML"
        values = "   2; -2; 0; 0; 0; 0; 0;0;0;0;0;"
        dur = "2.5s"
        repeatCount = "indefinite" / >
          <
          /feOffset> <
          feOffset in = "blue"
        result = "blue"
        dx = "0" >
          <
          animate attributeName = "dx"
        attributeType = "XML"
        values = "   6; -2; 0; 0; 0; 0; 0;0;0;0;0;"
        dur = "2.3s"
        repeatCount = "indefinite" / >
          <
          animate attributeName = "dy"
        attributeType = "XML"
        values = " 3; -2; 0; 0; 0; 0; 0;0;0;0;0;"
        dur = "2.1s"
        repeatCount = "indefinite" / >
          <
          /feOffset> <
          feBlend in = "red"
        in2 = "green"
        mode = "screen"
        result = "blend" / >
          <
          feBlend in = "blend"
        in2 = "blue"
        mode = "screen"
        result = "blend" / >
          <
          feGaussianBlur in = "blend"
        stdDeviation = "1" >
          <
          animate attributeName = "stdDeviation"
        attributeType = "XML"
        values = "1; 0; 0; 0"
        dur = "2s"
        repeatCount = "indefinite" / >
          <
          /feGaussianBlur> <
          /filter></svg>
      </div>
          <div className="splashWrapper">
            <div className="splashHeader">
              <div className="header">
                <h1>ADRIANWRITENOW;</h1>
                <h4>&#x0007B;JUNIOR DEVELOPER&#x0007D;</h4>
              </div>
            </div>
            <div className='splashButtons'>
              <a href="/#about" className="linethru linethru--rev">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</a>
              <a href="/#experience" className="linethru linethru--rev">
                &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</a>
              <a href="/#skills" className="linethru linethru--rev">
                &#x0003C;SKILLS&#x0002F;&#x0003E;</a>
              <a href="/contact" className="linethru linethru--rev">
                &#x0003C;CONTACT&#x0002F;&#x0003E;</a>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Splash;
