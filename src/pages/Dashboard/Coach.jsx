import React from 'react'
import Sidebar from '../../components/Coach/Sidebar.jsx'
import Healthcoach from '../../components/Coach/Healthcoach.jsx'
import firstimage from '../../assets/Dashboard/Coach/firstimage.png'

import FeedbackCard from '../../components/Coach/FeedbackCard.jsx'
import PremiumBanner from '../../components/Coach/PremiumBanner.jsx'
import LearnmoreBanner from '../../components/Coach/LearnmoreBanner.jsx'
import ChatCoach from '../../components/Coach/ChatCoach.jsx'
import drnike from '../../assets/Dashboard/Coach/drnike.png'

const Coach = () => {
  return (
    <>
        <Sidebar />
        <div>
          <ChatCoach name="Dr. Nike Shimawa" role="Health Coach" image={drnike} rating={5} buttonText='Continue Chat' />
        </div>
        
        <div className='flex gap-4  ' > 
        <div className='bg-[#F6F6]  rounded-[30px]  p-4'>
        <h2 className='text-[24px] font-[600] pl-4 m-2' >Health Coach</h2>
        <div className='flex '>
        <Healthcoach image={firstimage} name="Dr. Mark Odoma" description="Health Coach" rating={5} buttonText="Message"  />
        <Healthcoach image={firstimage} name="Dr. Niyi Olominu " description="Health Coach" rating={5} buttonText="Message" />
        <Healthcoach image={firstimage} name="Dr. Gbemi Esho" description="Health Coach"  rating={3} buttonText="Message" />
        <Healthcoach image={firstimage} name="Dr. Mary Taiwo" description="Health Coach"  rating={2} buttonText="Message" />
        </div>
        </div>
        <FeedbackCard />
        </div>
        <footer className='flex gap-5'>
          <PremiumBanner />
          <LearnmoreBanner />
        </footer>
    </>
  )
}

export default Coach