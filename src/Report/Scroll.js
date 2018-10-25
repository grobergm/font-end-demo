import React from 'react';

const Scroll=(props)=>{
return (
	<div style={{overflowY:'scroll',height:'500px',background:'rgba(255,255,255,0.5)'}}>
		{props.children}
	</div>
	);
}

export default Scroll;