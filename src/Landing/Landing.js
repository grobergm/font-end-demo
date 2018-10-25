import React from 'react';
import content from './content';
import './Landing.css';

class Landing extends React.Component{
	constructor(props){
		super(props)
		this.state={toggle:0}
		this.changeClass=this.changeClass.bind(this);
	}
	changeClass(){
    if (this.state.toggle===0) this.setState({toggle:1})
    else if (this.state.toggle===1) this.setState({toggle:2})
    else if (this.state.toggle===2) this.setState({toggle:3})
    else if (this.state.toggle===3) this.setState({toggle:0})
  	}
  
	render(){
	let styles=["kitchen","vegi","meat","cupcake"]
		return(
		<div>
			<div id={styles[`${this.state.toggle}`]} className="jumbotron jumbotron-fluid">
				<div  className="container page">
					<div className="menueHeader">
						<h1 className="display-4">{content[`${this.state.toggle}`].title}</h1>
	        			<button onClick={this.changeClass} className={content[`${this.state.toggle}`].buttonClass}>{content[`${this.state.toggle}`].button}</button>
					</div>
					<div className="col textControl">
						<div className="row">
							{
								content[`${this.state.toggle}`].text.map((paragraph,i)=>{
								return (<p className="lead" key={i}>{paragraph}</p>)})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Landing;