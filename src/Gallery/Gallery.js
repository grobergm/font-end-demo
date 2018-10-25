import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import pets from './cardData';

class Gallery extends Component{
	constructor(){
		super()
		this.handleSelectChange=this.handleSelectChange.bind(this);
		this.state={
			data:[],
			searchfield:'',
			category:'All'
		}
	}

	componentDidMount(){
		this.setState({data:pets})
	}

	handleSelectChange(event){
		this.setState({category:event.target.value});
	}


	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});	
	}

	
	render(){
		const {data,searchfield,category}=this.state;
		let filteredPets=data.filter(pet=>{
			let nameFilter=pet.name.toLowerCase().includes(searchfield.toLowerCase());

			if(category==="Cat"){
			let categoryFilter=pet.species.includes("Cat")&&nameFilter;
			return categoryFilter;
			} 
			if(category==="Dog"){
			let categoryFilter=pet.species.includes("Dog")&&nameFilter;
			return categoryFilter;
			} else return nameFilter;
		})
	
		return !data.length ?
			<h1> Loading </h1> :
		(
		<div className="container">
			<div className="jumbotron">
			  <h1 className="display-4">Pet Gallery</h1>
			  <p className="lead">Want to allow users to easily browse through your content?</p>
			  <hr className="my-4"/>
			  <p>Try typing one of these pets name into the searchbox. Or search by category, using the drop down.
			  Hover over some pets and find new ways to interact with them.
			  </p>
			  <p className="lead">
			  <SearchBox searchChange={this.onSearchChange} 
			handleSelectChange={this.handleSelectChange}
			category={this.state.category} />
			  </p>
			</div>
			
			<CardList cards={filteredPets}/>
		</div>
		);	
	}	
}

export default Gallery;