import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    let skills = [{name:'REACT', logo:'http://www.wagonhq.com/images/posts/react.png'},{name:'REDUX', logo:'https://spin.atomicobject.com/wp-content/uploads/20171023103513/Redux.png'},{name:'JAVASCRIPT', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/2000px-Badge_js-strict.svg.png'},{name:'NODE', logo:'https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/techstacks/node-logo.png'},{name:'POSTGRESS', logo:'http://clipartist.net/social/clipartist.net/P/postgresql_logo-555px.png'},
      {name:'JSX', logo:'https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png'},{name:'JAVA', logo:'http://diylogodesigns.com/blog/wp-content/uploads/2017/07/java-logo-vector-768x768.png'},{name:'MONGO/MONGOOSE', logo:'https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png'},{name:'CSS', logo:'https://wpguru.co.uk/wp-content/uploads/2013/09/CSS-Logo-214x300.png'}, {name:'SCSS', logo:'https://foundation.zurb.com/emails/docs/assets/img/logos/sass-logo.svg'},{name:'HTML', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png'},{name:'NPM', logo:'https://www.npmjs.com/static/images/npm-logo.svg'},
      {name:'GIT', logo:'https://www.nicolapietroluongo.com/wp-content/uploads/2015/08/git_logo.png'},{name:'EXPRESS', logo:'https://rishabh.io/recipes/img/004-express-js.png'},{name:'JSON', logo:'https://labs.techaspect.com/wp-content/uploads/2017/07/json.png'},{name:'C#', logo:'http://www.engineerspock.com/wp-content/uploads/2016/01/CSharp.png'}, {name:'FINAL CUT PRO X', logo:'https://support.apple.com/content/dam/edam/applecare/images/en_US/proapps/finalcut/psp-mini-hero-finalcutprox_2x.png'}, {name:'PHOTOSHOP', logo:'http://4.bp.blogspot.com/-o-PlcuJMsEQ/V1YZXjSJ4SI/AAAAAAAAA2M/s5nAH9-NRAszNBn_ql73aGZ3aeZC6QTSACK4B/s1600/Photoshop%2BCS6.jpg'}];

      let skillCards = skills.map(function(skill,index){
         return (
          <div key={index} className="button">
            <img src ={skill.logo}/>
          </div>
         )
      });
    return (

        <div className="wrapper">

          <div className="contentHeader">
          <h1 className="linethru">
            &#x0003C;SKILLS&#x0002F;&#x0003E;</h1>
            <div className='container'>
              {skillCards}

            </div>
          </div>
          <img id="flower0C" src={require("./logos/poppyPlant.png")} alt='flower'/>
          <img id="flower1C" src={require("./logos/poppyPlant.png")} alt='flower'/>
          <img id="flower2C" src={require("./logos/poppyPlant.png")} alt='flower'/>
          <img id="flower3C" src={require("./logos/poppyPlant.png")} alt='flower'/>

        </div>
    );
  }
}

export default Skills;
