import React, { Component } from 'react';
import menu from './iconfinder_menu_1814109.png';
import closeButton from './iconfinder_Close_1031533.png';

class Main extends Component {
    constructor(props) {
        super(props);
        //int state
        this.state = {
            message: "Welcome Message",
            isShowMenu: false,
            isShowBox: false
        }
        //bind this
        this.updateMessage = this.updateMessage.bind(this);
        this.handleShowBox = this.handleShowBox.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }
    //custom function
    updateMessage(){
        this.setState({message:"Have a Good Time!"});
    }
    handleShowBox(){
        this.setState({isShowBox: true});
    }
    toggleMenu(){
        this.setState(prevState => ({isShowMenu: !prevState.isShowMenu}));
    }

    render() {
        console.log(this.state.isShowMenu);
        const {message, isShowBox, isShowMenu} = this.state;
        return (
            <div>
                     <header className="main-header">
        <div className="list">
          <ol>Item 1</ol>
          <ol>Item 2</ol>
          <ol>Item 3</ol>
          <ol>Item 4</ol>
        </div>
        <div onClick={this.toggleMenu}>
          <img className="menu" src={menu} alt="a menu image"/>
        </div>
        <div className="web-title">
          Website Title/ Logo
    </div>
        <div className="popMenu" id="popMenu" style={{display: (isShowMenu ? "block": "none")}}>
          <div className="popList" id="popList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </div>
          <div id="closeButton" onClick={this.toggleMenu}>
            <img className="closeButton" src={closeButton} alt="an close button image"/>
          </div>
        </div>
      </header>
      <h1 className="title" id="welcome" onClick={this.updateMessage}>
      {/* <h1 className="title" id="welcome" onClick={changeText}> */}
        {message}
    </h1>
      <h2 className="section">
        Section Title
    </h2>
      <div className="four-boxes">
        <div className="row1">
          <div className="box-1">Content Box 1</div>
          <div className="box-2">Content Box 2</div>
        </div>
        <div className="row2">
          <div className="box-3">Content Box 3</div>
          <div className="box-4">Content Box 4</div>
        </div>
      </div>
      <footer className="footer" id="cta">
        <p className="cta" onClick={this.handleShowBox}>Call to Action</p>
      </footer>
      <div className="another-four-boxes" id="more" style={{display: (isShowBox ? "block": "none")}}>
        <div className="row3">
          <div className="box-5">Content Box 5</div>
          <div className="box-6">Content Box 6</div>
        </div>
        <div className="row4">
          <div className="box-7">Content Box 7</div>
          <div className="box-8">Content Box 8</div>
        </div>
      </div>
      <script src='W2_Assignment4.js'></script>
            </div>
        );
    }
}

export default Main;


//another way
/*
(in .CSS)
.u-d-show {
    display: block !important;
}
.u-d-none {
    display: none !important;
}
(in .js)
<div className = {isShowBox ? "u-d-show":"u-d-none"}
*/