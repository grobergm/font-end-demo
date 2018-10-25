import React from 'react';

export default class Rank extends React.Component{
	constructor(props){
		super(props)
		this.selectIcon=this.selectIcon.bind(this);
		this.selectMessage=this.selectMessage.bind(this);
		this.state=
		{stars:0,
		rank:0}
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
				if(this.state.rank===1) return "Very Bad Dog";
				if(this.state.rank===2) return "Bad Dog";
				if(this.state.rank===3) return "Just a Dog";
				if(this.state.rank===4) return "Good Doggy";
				if(this.state.rank===5) return "Great Dog";
			 }
		if(this.props.species==="Cat")
		{
			if(this.state.rank===1) return "Very Bad Cat";
			if(this.state.rank===2) return "Bad Kitty";
			if(this.state.rank===3) return "Just a Cat";
			if(this.state.rank===4) return "Awww, Good kitty";
			if(this.state.rank===5) return "Great Cat";
		}
	}
	
	render(){
		
		
		let icon=this.selectIcon();
		let message=this.selectMessage();

		return(	
			<span>
			<span style={this.state.rank!==0 ? {display:'inline'} : {}} id="ranking">
				<span style={this.state.stars>=1 || this.state.rank>=1 ? {color:"gold"}:{color:"black"}} onClick={()=>this.setState({rank:1})} onMouseOver={()=>this.setState({stars:1})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=2 || this.state.rank>=2 ? {color:"gold"}:{color:"black"}} onClick={()=>this.setState({rank:2})} onMouseOver={()=>this.setState({stars:2})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=3 || this.state.rank>=3 ? {color:"gold"}:{color:"black"}} onClick={()=>this.setState({rank:3})} onMouseOver={()=>this.setState({stars:3})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=4 || this.state.rank>=4 ? {color:"gold"}:{color:"black"}} onClick={()=>this.setState({rank:4})} onMouseOver={()=>this.setState({stars:4})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
				<span style={this.state.stars>=5 || this.state.rank>=5 ? {color:"gold"}:{color:"black"}} onClick={()=>this.setState({rank:5})} onMouseOver={()=>this.setState({stars:5})} onMouseLeave={()=>this.setState({stars:0})}>{icon}</span>
			</span>	
			<h4>{message}</h4>
			</span>
			)
	}
}