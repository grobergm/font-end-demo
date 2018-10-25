import	React from 'react';
import Card from './Card';
import Rank from './Rank'
const CardList=({ cards })=>{
	 return(
	 	<div className="container">
			<div className="row">
			{
				cards.map((card,i)=>{
					return (
					<Card 
						key={i}
						name={cards[i].name} 
						species={cards[i].species}
						photo={cards[i].photo} 
						/>
					);
				})
			}
			</div>
		</div>
	);
}

export default CardList;