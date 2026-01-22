import React from 'react'
import escape from "../../pictures/escaperoom.JPG"
import disney from "../../pictures/disneytrip.jpg"
import festival from "../../pictures/festivals.jpg"
import graduate from "../../pictures/graduation.jpg"
import proposal from "../../pictures/proposed.jpg"
import london from "../../pictures/riverthames.jpg"

const OurStory = () => {
  return (
    <div className='story'>
      <div className="tale">
        <div className="head_title">
          <h1>OurStory</h1>
        </div>
        <div className='story_blurb'>
          <div className="introduction">
            <h2>Where Our Story Began</h2>
            <div className="corner">
              
              <p>
                Our story begins in early March 2022. We met online via the (at the time) new dating 
                app hinge while we both were in California. Robert was stationed at Vandenberg SFB and 
                Lexy was finishing her undergraduate college education at Westmont College. After chatting 
                and getting to know each other for three weeks, we started by going out on small 
              dates to parks for picnics and to cat cafes, out to dinner, to see movies, or spend the 
              days walking around Santa Barbara, Solvang, or Santa Maria. We got to go to a few of Lexy's 
              favorite places like Disneyland and Bettina Pizza,
               and even spent holidays together like our first time in a church together that Easter.
              </p><img src={disney} className="disney" alt="us at our first disney trip"/>
            </div>
            
          </div>
          <div className="graduation_day">
            <h2>Where We Had to Decide</h2>
            <div className="corner">
              
              <p>
                With Lexy's graduation only two months away, 
                the two of us made the most of the time we had together which allowed us to learn more about
                each other and our various quirks. As time got closer to Lexy graduating, we faced a tough 
                decision after the months of getting to know one another since, after about a month of being 
                together, Lexy was accepted to Oxford University and was going to be moving across the ocean 
                to achieve her education goals in the fall. With the two of us being so new and yet so 
                familiar to the other, we didn't want to end things between us and so we 
                continued to enjoy the time we had together. Once graduation day arrived in May, it was time to celebrate Lexy's new
                accomplishment at her
              graduation ceremony which is where Robert met her family for the first time. This was also right
               before Lexy moved back to Oregon for the summer which preceded her trans-Atlantic move 
              to England for her graduate program, so the time for us to 
              </p>
              <img src={graduate} className="graduate" alt="us walking across a bridge for graduation"/>
            </div>
            
            <p className='longtext'>
                  make a decision about our
              relationship had come. Ultimately 
              we decided that even though distance would be rough, we would
              try to make things work over the long distance and eight hour time difference.
            </p>
            
          </div>
          <div className='growing_relationship'>
            <h2>How We Kept Things Alive</h2>
            <div>
              <p className='longtext'>
              This culminated
              in making a point to talk or text every single day and plan dates where we watched movies or 
              played video games together, our favorite at that time was Baldur's Gate 3. We even went as 
              far as flying to the other every four to six months for about a week at a time to make up 
              for the time apart and go on dates like we did before. We even made time to see each other 
              during important times while we were progressing our careers.This allowed us to travel to 
              places we had never been: Rob to Bend, Oxford, and London where we did hikes and got to tour 
              different areas and Lexy to Colorado Springs and Biloxi where we did our first escape room. 
              We also spent several holidays together over this time and were there for each other during 
              important life moments like Robert's baptism and Lexy's sister's wedding.
              </p>
            </div>
            <div className='trips'>
              <img src={london} alt="us at river thames"/>
              <img src={escape} alt="us finishing the escape room"/> 
              <img src={festival} alt="us at lantern festival"/>
            </div>
                       
          </div>

          <div className='proposed'>
            <h2>Where We Are Now</h2>
            <div className='corner'>
              <img src={proposal} alt="proposal"/>
              <p>
                As you can imagine, long-distance wasn’t the easiest on our relationship - it never is for any 
                relationship - but over time our romance flourished and was nourished by the strong foundation 
                of intentionality and communication that we built because of our care for each other despite 
                the distance. When February of 2025 came around, Robert surprised Lexy with a week-long trip 
                across the British countryside from Oxford through the Cotswolds to Exmoor where Robert thought
                he would propose but the gloomy British weather had other plans for us. The trip finished in 
                London where we visited Kew Royal Botanical gardens where Rob then proposed in the formal 
                gardens behind Kew Palace. Lexy said yes, and after finishing her graduate program, we moved 
            in together in Colorado Springs where we are now planning our wedding back in Oregon, and we 
            are so excited to see you there!
              </p>
              
            </div>
            
          <p>
            
          </p>
          </div>
          
          
        </div>
      </div>
      
      
    </div>

  )
}

export default OurStory