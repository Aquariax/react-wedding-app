import attire from '../../pictures/wedding attire.jpg';
import venue from '../../pictures/deebar.jpg'
import food from '../../pictures/food.jpg'
export const CardData = [
	{
		id: 1,
		img: venue,
		title: 'Venue',
		text: 
		<ul>
			<li>Our wedding ceremony and reception will both take place at Dee Bar Weddings in Powell Butte, Oregon.</li>
			<li>The address is:</li>
			<li>6402 SW Powell Butte Hwy, Powell Butte, OR 97753</li>
		</ul>  
	},
	{
		id: 2,
		img: attire,
		title: 'Attire',
		text:
		<ul>
			<li>We ask that our guests dress appropriately for the occasion with semi-formal attire.</li> 
			<li>This could range from dress pants with a nice shirt to a suit for men and knee-length to floor-length dresses or a nice pantsuit or equivalent for women.</li>
			<li>We also invite you all to dress in our wedding colors of greens, neutrals, and autumnal hues, though this is optional.</li>
		</ul>
		
	},
	{
		id: 3,
		img: food,
		title: 'Catering',
		text: <ul><li>Catering information is still to come. Please check back later!</li></ul>
		
	}
]