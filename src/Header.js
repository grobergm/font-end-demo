import React from 'react';
import Tab from './Tab';


const Header=(props)=>{
 	const blue="btn btn-lg btn-primary";
    const green="btn btn-lg btn-success";
    const red="btn btn-lg btn-danger";
    const contact="blockContact btn btn-lg btn-info";

	return(
	<header className="App-header">
	          <h1 className="App-title">Matt Groberg</h1>
	          <p className="App-intro"><span className="lineAround"><em>Web Developer</em></span></p>
	        <div className="btn-group tabs">
	        	<Tab color={blue} changeTab={props.changeLanding} tabName="Landing" name="Style Kitchen" view={props.view} />
	        	<Tab color={red} changeTab={props.changeGallery} tabName="Gallery" name="Pet Gallery" view={props.view} />
	        	<Tab color={green} changeTab={props.changeReport} tabName="Report" name="Oregon Diversity" view={props.view} />
	        </div>
	</header>
	)
}

export default Header;

 