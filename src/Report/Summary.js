import React from 'react';

const Summary=(props)=>{

		return(
			<table className="table">
			  <thead className="thead-dark">
			    <tr>
			      <th scope="col">Iconic Taxa</th>
			      <th scope="col">Count</th>
			    </tr>
			  </thead>
			  <tbody style={{background:'white', color:'black'}}>
			  {
			  	props.data.map((group,i)=>{
			  		return (
			  		<tr>
			  			<th scope="row">{props.data[i].name}</th>
      					<td>{props.data[i].count}</td>
      				</tr>
      				)
			  	})
			  }
			  </tbody>
			</table>
		)
}


export default Summary

// <tr>
//       			<th scope="row">{props.taxa[i].taxon.iconic_taxon_name}</th>
//       			<th scope="row">{props.taxa[i].count}</th>
//       		</tr>

// .then(sum=>sum.reduce((accumulator,taxon,n)=>{
//   			if(accumulator.name===taxon.name){
//   				return accumulator.count+taxon.count
//   			}
//   			}))