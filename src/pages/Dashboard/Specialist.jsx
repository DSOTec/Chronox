import React from 'react'
import Sidebar from '../../components/Coach/Sidebar'
import FirstLine from '../../components/Coach/FirstLine'
import SmallBanner from '../../components/Specialist/SmallBanner'
import Button from '../../components/Specialist/Button'
import Appointment from '../../components/Specialist/Appointment'
import Prescription from '../../components/Specialist/Prescription'
import Reccomended from  '../../components/Specialist/Reccomended'


const Specialist = () => {
  return (
   <>
    <div className='flex gap-4 w-full h-screen bg-[#F5F5F5]'>
        <div>
            <Sidebar />
        </div>
        <div>
            <FirstLine />
  
            <div className='flex justify-between ' >
            <SmallBanner />
            <Button />
            </div>
            <div className='flex  gap-4 mt-4'>
                <Appointment />
                <Prescription />
                <Reccomended />
            </div>
        </div>
    </div>
   </>
  )
}

export default Specialist