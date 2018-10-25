import React from 'react';
import './Gallery.css';
import Rank from './Rank'

class Card extends React.Component{
	constructor(props){
	super(props)
	this.state={
		selected:false,
		stars:0}
	this.selectIcon=this.selectIcon.bind(this);
	this.selectMessage=this.selectMessage.bind(this);
	this.setClassName=this.setClassName.bind(this);
	}

	setClassName(){
		if(this.props.species==="Dog"&&this.state.selected===true)
		{return "card selected dog"}
		if(this.props.species==="Dog"&&this.state.selected===false)
		{return "card dog"}
		if(this.props.species==="Cat"&&this.state.selected===true)
		{return "card selected cat"}
		if(this.props.species==="Cat"&&this.state.selected===false)
		{return "card cat"}
	}
	selectIcon(){
		if(this.props.species==="Dog")
		{return <i className="fas fa-dog fa-lg"></i>}
		if(this.props.species==="Cat")
		{return <i className="fas fa-cat fa-lg"></i>}
	}
	selectMessage(){
		if(this.props.species==="Dog")
			{
				if(this.state.stars===1) return "Very Bad Dog";
				if(this.state.stars===2) return "Bad Dog";
				if(this.state.stars===3) return "Just a Dog";
				if(this.state.stars===4) return "Good Doggy";
				if(this.state.stars===5) return "Great Dog";
			 }
		if(this.props.species==="Cat")
		{
			if(this.state.stars===1) return "Very Bad Cat";
			if(this.state.stars===2) return "Bad Kitty";
			if(this.state.stars===3) return "Just a Cat";
			if(this.state.stars===4) return "Awww, Good kitty";
			if(this.state.stars===5) return "Great Cat";
		}
	}

	render(){
	let icon=this.selectIcon();
	let message=this.selectMessage();
	let petClass=this.setClassName();
		return(
		<div className={petClass} onMouseOver={()=>this.setState({selected:true})} onMouseOut={()=>this.setState({selected:false})} >
			<img className="card-img-top" alt={this.props.name} src={this.props.photo} />
			<div className="card-body">
				<h1 className="card-title">{this.props.name}</h1>
			<span id="ranking">
				<span style={this.state.stars>=1 ? {color:"gold"}:{color:"black"}} onMouseOver={()=>this.setState({stars:1})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=2 ? {color:"gold"}:{color:"black"}} onMouseOver={()=>this.setState({stars:2})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=3 ? {color:"gold"}:{color:"black"}} onMouseOver={()=>this.setState({stars:3})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=4 ? {color:"gold"}:{color:"black"}} onMouseOver={()=>this.setState({stars:4})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=5 ? {color:"gold"}:{color:"black"}} onMouseOver={()=>this.setState({stars:5})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
			</span>
			<hr/>
				<p className="card-text">{message}</p>
			</div>
		</div>
		)
	}
}

export default Card;