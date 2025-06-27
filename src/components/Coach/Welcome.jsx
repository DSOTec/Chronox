import React from 'react'

const Welcome = () => {
  return (
    <div className='flex items-center justify-between  p-4 '>
        <div>
            <h1 className='text-[24px] font-[600] pl-4 m-2'>Welcome back, Paul</h1>
            <p className='text-[16px] font-[400] pl-4 m-2'>Let's pick up where you left off with your health journey</p>
        </div>
        <button className='bg-[#24CDAF] text-[16px] text-white p-5 rounded-[30px] m-2 w-[260px]'>View chat history</button>
    </div>
  )
}

export default Welcome