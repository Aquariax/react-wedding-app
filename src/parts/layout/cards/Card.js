import React, { useState } from 'react';
import { CardData } from './CardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Card = ({ cards }) => {
	const [current, setCurrent] = useState(0);
	const length = cards.length;
	const nextCard = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevCard = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	return (
		<div className='carousel' id='wedding-roles'>
			<div className='heading'>
				<h3>Wedding Day Roles</h3>
				<h5>What's in store for everyone</h5>
			</div>
			<div className='card-area'>
				<FontAwesomeIcon icon="fas fa-caret-left" className='leftarrow' onClick={prevCard}/>
				{CardData.map((card, index) => {
					return (
						<div className={index === current ? 'card viewing' : `card`} key={card.id}>
							<div>
								<div className='card_body'>
									<div className='card-title'>{card.title}</div>
                                    <div className='card-img'>
									    <img src={card.img} alt='pictures of different wedding day roles' className='fixer'/>
								    </div>
									<div className='middle'>{card.text}</div>
									<div className='bottom'>

									</div>
								</div>
							</div>
							
						</div>
						
					);
				})}
				<FontAwesomeIcon icon="fas fa-caret-right" className='rightarrow'onClick={nextCard}/>
			</div>
		</div>
	);
};

export default Card;