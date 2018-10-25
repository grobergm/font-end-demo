import React from 'react';

const SearchBox=(props)=>{
	return(
		<div className="searchBox row">
			<input className="form-control"
			type='search' 
			placeholder='Search by Name' 
			onChange={props.searchChange}
			/>
			<select className="form-control" value={props.category} onChange={props.handleSelectChange}>
				<option value="All">All</option>
				<option value="Cat">Cats</option>
				<option value="Dog">Dogs</option>
			</select>
		</div>
		)
};

export default SearchBox;