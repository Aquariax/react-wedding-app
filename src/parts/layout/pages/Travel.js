import React from 'react'

const Travel = () => {
  return (
    <div className="travel">
      
      <div className="activities">
        <h1>Travel</h1>
        <div className="advice">
          <div className='blocks'>
            <h2>Where to fly.</h2>
            <ul>
              <li>The easiest way to get to central Oregon would be to fly into Redmond
              Municipal airport (RDM), which is around a 30-minute drive from Bend
              where there are plenty of local family and friends who would be able to
              pick you up.</li> 
              <li>Another option would be to fly into Portland International Airport (PDX)
              which is about a 3.5 hour drive from Bend.</li> 
              <li>These are the two main airports to fly into when coming to visit.</li> 
            </ul>
          </div>
          <div className='blocks'>
            <h2>Where to stay.</h2>
            <ul>
              <li>While the venue is in Powell Butte (about a 20 minute drive from Bend) we
              recommend that you stay in Bend, Oregon. This is the biggest town in the
              area and there are lots of options for where to stay, what to eat, and things
              to do.</li> 
              <li>There are many different hotels in the area and rooms typically start at a
              price of around $120 per night.</li> 
              <li>Airbnb’s are also plentiful in the area for a wide range of budgets.</li> 
            </ul>
          </div>
          
        </div>
       
        <h2>Things to do</h2>
        <div className='fun_times'>
          <div className='blocks'>
            <ul> 
              <li><h3>Some of our favorite nearby hikes</h3> 
                <ul>
                  <li>Deschutes River Trail</li> 
                  <li>Tumalo Falls</li> 
                  <li>Benham Falls</li> 
                  <li>Lava Cast Forest</li> 
                  <li>Smith Rock State Park</li> 
                  <li>Lava Lands and Visitor Center</li>
                </ul>
              </li>
              <li><h3>Breweries</h3>
                <ul>
                  <li>Bend Brewing Company</li> 
                  <li>Deschutes Brewing</li> 
                  <li>10 Barrel Brewing</li> 
                  <li>Worthy Brewing</li> 
                  <li>Sunriver Brewing</li> 
                  <li>Cascade Lakes Pub</li> 
                  <li>Boneyard Beer</li> 
                  <li>Broken Top Bottle Shop</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className='blocks'>
            <ul>
            <li className='shopping'>
              <h3>Shopping Centers</h3>
              <ul>
                <li>Old Mill District</li> 
                <li>Northwest Crossing</li> 
                <li>Cascade Village Shopping Center</li> 
              </ul>
            </li>
            <li><h3>Other</h3>
              <ul>
                <li>Lava Lanes (Bowling)</li> 
                <li>Sun Mountain Fun Center (Bowling, Mini golf, Arcade)</li> 
                <li>Eagle Crest putting course</li> 
                <li>Drake Park</li> 
                <li>McMenamins Old St Francis Theater – good for dinner and a
                movie!</li> 
                <li>Velvet (cocktail lounge)</li> 
                <li>High Desert Museum</li> 
                <li>The last Blockbuster!</li>
              </ul>
            </li>
            </ul>
          </div> 
        </div>

        <h2>Some of our favorite places to eat</h2>
        <div className='advice'>
          <div className='blocks2'>
            <ul>
              <li>Wild Rose Northern Thai Eats</li> 
              <li>Bend Burger Company</li> 
              <li>The Lot – Food trucks (there are also lots of other food truck locations!)</li> 
              <li>Deschutes Brewery</li> 
              <li>10 Barrel Brewing</li> 
              <li>River Pig Saloon</li> 
              <li>McKay Cottage Restaurant</li> 
              <li>El Sancho Taco Shop</li> 
              <li>Big O Bagels</li> 
            </ul>
          </div>
          <div className='blocks3'>
            <ul>
              <li>The Sparrow Bakery</li> 
              <li>Okawa Japanese Steak House and Sushi</li> 
              <li>Pinky G’s Pizzeria</li> 
              <li>Fat Tony’s Pizzeria</li> 
              <li>CHI Chinese and Sushi Bar</li> 
              <li>Willamette Valley Vineyards</li> 
              <li>Junction Roastery (good coffee)</li> 
              <li>Richard’s Donuts</li> 
              <li>Life and Time (allergy friendly)</li> 
              <li>Tumalo Feed Company</li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel