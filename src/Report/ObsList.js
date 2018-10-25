import	React from 'react';


const ObsList=(props)=>{
	if (props.obs!==[]){

		 return(
			<div className="row">
			{
				props.obs.map((ob,i)=>{
					return (
					<div className="species" >
						<h3><em>{props.obs[i].name}</em></h3>
						<h3>{props.obs[i].common}</h3>
						<img src={props.obs[i].photo} /><span style={{display:'inline'}}>Count: {props.obs[i].count}</span>
					</div>
					);
				})
			}
			</div>
		)}
	else if(props.obs===[]) return <h1>no results to display</h1>
}

export default ObsList;