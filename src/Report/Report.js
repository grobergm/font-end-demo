import React from 'react';
import sample from './ecoregions';
import ObsList from './ObsList';
import SimpleMap from './SimpleMap';
import Scroll from './Scroll';
import Summary from './Summary';
import './Report.css';



export default class Report extends React.Component {
constructor(props){
	super(props)
	this.getSample=this.getSample.bind(this);
	this.state={
		points:[],
		oregon:[],
		summary:[]
	}
}
// fetch until it gets a result? 
// fetch the first 30 results from entire range? 
// option to set dates?
componentDidMount(){
	this.getSample()
}

getSample(){
	let oregonPoint= sample('oregon');
	this.setState({points:[...this.state.points, oregonPoint]});
	fetch(`https://api.inaturalist.org/v1/observations/species_counts?&lat=${oregonPoint.randLat}&lng=${oregonPoint.randLng}&radius=200&quality_grade=research`)
	.then(response=>response.json())
	.then(res=>{
		let totalsArray=res.results.map((individual,i)=>{
  			return(
  				{
  				name:res.results[i].taxon.name,
  				common:res.results[i].taxon.preferred_common_name,
  				photo:res.results[i].taxon.default_photo.url,
  				group:res.results[i].taxon.iconic_taxon_name,
  				count:res.results[i].count
  				}
  				)
  			})
		this.setState({oregon:this.state.oregon.concat(totalsArray)});
		let groupsArray=[];
		for (let x in this.state.oregon){
			if(!groupsArray.includes(this.state.oregon[x].group)){ 
				groupsArray.push(this.state.oregon[x].group);
			}
		}

		let sumArray=[];
		for (let x in groupsArray){
			let sumVar=0;
			let sumGroup=groupsArray[x];
			let sumObj={};
			for (let y in this.state.oregon){
				if(this.state.oregon[y].group===groupsArray[x])
				sumVar+=this.state.oregon[y].count
			}
			sumObj.name=sumGroup;
			sumObj.count=sumVar;
			sumArray.push(sumObj);
		}
		this.setState({summary:sumArray});
		console.log(this.state);
	})


	}

	
	render(){
		return(
			<div className="container">
			<div className="jumbotron">
			  <h1 className="display-4">Sampling Oregon's BioDiversity</h1>
			  <p className="lead">This example demonstrates the use of APIs with AJAX requests. 
			  </p>
			  <hr className="my-4"/>
			  <p>Click the button bellow to select a random point in Oregon. These points will be displayed using the Google Maps API.
			  Then the inaturalist API will do a species count in the area, which accumulate with each sample. The summary table groups observation data into
			  iconic taxa which you might recognize. 
			  </p>
			  <p className="lead">
				<button className="btn btn-lg btn-block btn-danger" onClick={this.getSample}>Get a sample</button>
			  </p>
			</div>
				<div className="row">
					<div className="col">
						<Summary data={this.state.summary} />
					</div>
					<div className="col">
					<SimpleMap points={this.state.points} />
					</div>
				</div>
				<ObsList obs={this.state.oregon} />
			</div>
			)
	}
}