import React, {Component} from 'react';


class BaseLayout extends Component {

  render(){
    return (
      <div className="navBarCont">

        {this.props.children}
        <div className="flex-center">

          <a href="https://github.com/Adrianwritenow"><i className="fa fa-github fa-4x icon-3d"></i></a>
          <a href="https://www.linkedin.com/in/adrian-rodriguez-3bb968129/"><i className="fa fa-linkedin-square fa-4x icon-3d"></i></a>
          <a href="https://www.tumblr.com/blog/adrianwritenow"><i className="fa fa-tumblr fa-4x icon-3d"></i></a>
          <a href="https://open.spotify.com/user/1262709064"><i className="fa fa-spotify fa-4x icon-3d"></i></a>

        </div>
      </div>

  );
}
}



export default BaseLayout;
