import React, { Component } from 'react';
import './App.css';
import Landing from './Landing/Landing'
import Gallery from './Gallery/Gallery'
import Report from './Report/Report'
import Header from './Header'
import sun from './sun.jpg';
import trees from './trees.jpg';
import water from './water.jpg';

class App extends Component {
  constructor(){
    super();
    this.changeLanding=this.changeLanding.bind(this);
    this.changeGallery=this.changeGallery.bind(this);
    this.changeReport=this.changeReport.bind(this);
    this.state={
      view:"Landing",
      page:0 
    }
  }
  componentDidMount(){
  this.timerId=this.changePage()}

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  changePage(){
    this.setState({page:1})
    setTimeout(()=>{
    this.setState({page:2}) 
      setTimeout(()=>{
      this.setState({page:3})
        setTimeout(()=>{
        this.changePage() 
        },10000) 
      },10000)
    },10000)
  }

  changeLanding(){this.setState({view:"Landing"})}
  changeGallery(){this.setState({view:"Gallery"})}
  changeReport(){this.setState({view:"Report"})}
  

  render() {     
      let viewComponent=<Landing />;
      if(this.state.view==="Landing") {viewComponent=<Landing />}
      if(this.state.view==="Gallery") {viewComponent=<Gallery />}
      if(this.state.view==="Report") {viewComponent=<Report />}

      let splash="";
      if(this.state.page===1) splash=trees
      if(this.state.page===2) splash=water
      if(this.state.page===3) splash=sun
      document.body.style.background=`url(${splash}) no-repeat center center fixed`
      // let backgroundColor="#000000";
      // if(this.state.page===1) {backgroundColor="#000000"};
      // if(this.state.page===2) {backgroundColor="#464646"};
      // if(this.state.page===3) {backgroundColor="#7F7E7E"};
      // document.body.style.background=backgroundColor;
      // (console.log(backgroundColor))

    return(
      <div>
        <Header 
          changeLanding={this.changeLanding}
          changeGallery={this.changeGallery}
          changeReport={this.changeReport}
          view={this.state.view} />
        <div className="container">
        {viewComponent}
        </div>
      </div>
      )};
}


export default App;
