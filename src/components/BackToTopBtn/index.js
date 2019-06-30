import React, {PureComponent} from 'react';

import "./styles/backToTopBtn.css";

class BackToTopBtn extends PureComponent{

  state = {
    display: "none"
  }

  componentDidMount() {
    window.onscroll = () => {this.scrollFunction()};
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.setState({display: "block"});
    } else {
      this.setState({display: "none"});
    }
  }

  render(){
    const { display } = this.state

    return(
      <a href="#top" style={{display: display}} className="backToTop">
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </a>
    )
  }
}

export default BackToTopBtn
