import React from 'react'
import logo from '../assets/logo.png'
import { MdHome, MdFavorite, MdPerson, MdMedicalServices, MdSettings,  MdNotifications } from 'react-icons/md'
import logout from '../assets/logout.png'
import metric from '../assets/metrics.png'
import heart from '../assets/heart.png'
import heartrate from '../assets/heartrate.png'
import medication from '../assets/medication.png'
import checkbox from '../assets/checkbox.png'
import mood from '../assets/mood.png'
import glucose from '../assets/glucose.png'
import symbols from '../assets/symbols.png'
import pressure from '../assets/pressure.png'
import abnormal from '../assets/Abnormal.png'
import heartprogress from '../assets/heartprogress.png'
import glucoselevel from '../assets/glucoselevel.png'
import glucoseicon from '../assets/glucloseicon.png'


const Hone = () => {
  return (
    <>
    <div className='bg-[#E8F2F1]'>
        <div className='flex items-start justify-between gap-  bg-[#F5F5F5] h-[100vh]'>
        {/* Left aside */}
            <div className='w-40 h-[150vh] bg-[#24CDAF] p-4 flex flex-col items-center justify-between  rounded-l-[10px] shadow-lg'>
                <div className='flex items-center justify-center mt-10'>
                      <img className='bg-white p-[10px] rounded-[40px]' src={logo} alt="Logo" />                
                </div>  
                <div className='mt-20 bg-white p-4 rounded-[50px] shadow-lg'>
                    <nav>
              <ul className="flex flex-col gap-12">
                {/* Home (active) */}
                <li className="flex flex-col items-center">
                  <MdHome size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] ] font-medium mt-2">Home</span>
                 
                </li>
                {/* Health */}
                <li className="flex flex-col items-center">
                  <MdFavorite size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Health</span>
                </li>
                {/* Coach */}
                <li className="flex flex-col items-center">
                  <MdPerson size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Coach</span>
                </li>
                {/* Specialist */}
                <li className="flex flex-col items-center">
                  <MdMedicalServices size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Specialist</span>
                </li>
                {/* Settings */}
                <li className="flex flex-col items-center">
                  <MdSettings size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Settings</span>
                </li>
              </ul>
            </nav>
                </div> 
                <button className='mt-10 bg-white p-4 rounded-[40px] shadow-lg cursor-pointer'>
                    <img src={logout} alt="Logout" className="w-8 h-8 " />
                </button>             
                <div>

                </div>
            </div>
        {  /* Main content */}
            <div className='w-[65%] h-[] p-4'>
             <div>
             <div className='flex items-center gap-1 justify-between items-center bg-white p-4 rounded-[10px] shadow-lg'>
             <div><h1 className='text-[24px] font-[700] font-[Roboto]'>Good morning Paul</h1>
                <p className='text-[18px] font-[400]'>Your wellness at a glance</p>
            </div>
            <div className='flex items-center gap-10'>
            <div>
                <button className='p-3 bg-[#23ccb2] text-white text-center rounded-[40px]'>Upgrade to Premium</button>
            </div>
        <div className="flex items-center gap-4">
        <button className="bg-[#23ccb2] p-2 rounded-full">
            <MdNotifications size={28} className="text-white" />
        </button>
        </div>
        </div>
                
             </div>
             </div>
             {/* Health Metrics */}
             <div>
             <div className='flex justify-between items-center p-4   mt-4'>
                <h1>Health Metrics</h1>
                <img src={metric} alt="Health Metrics" className="w-[25px]" />
             </div>   
                <div className='grid grid-cols-4 gap-4 mt-4'>
                    <div className="bg-white rounded-[30px] w-[210px] h-[200px] shadow-lg flex flex-col items-center justify-center">
            {/* heartrate */}
            <div>
                <div className='flex gap-12 mb-10 justify-between '>
                    <h1 className='font-[700] text-[#373737]'>Heart Rate</h1>
                    <img className='w-[20px] h-[20px]' src={heart} alt='heart' />
                </div>
                <div className='flex justify-center mb-10'>
                <img src={heartrate} alt='heartrate' /> 
                </div>
                <div className='flex justify-between'>
                    <p className='text-[#24CDAF] font-[500]'>71bpm</p>
                    <p className='text-[#373737] font-[400]'>Normal</p>
                </div>
                <div>
                    <p className='text-[#636363] text-[13px]'>1 hour ago</p>
                </div>
            </div>

                 </div>
                  <div className="bg-white rounded-[30px] w-[210px] h-[200px] shadow-lg flex flex-col items-center justify-center">
            {/* Medication*/}
            <div >
                <div className='font-[700] text-[#373737] mb-10'>Take Medication</div>
                <div className='flex justify-center' ><img className='w-[60px]' src={medication} alt='medication' /></div>
                <div className='flex justify-between items-center gap-10 mt-4'>
                    <p>Medication</p>
                    <img src={checkbox} alt='checkbox' className='w-[20px] h-[20px]' />
                </div>
                <div><p className='text-[#636363] text-[13px]'>1 hour ago</p></div>

            </div>
            </div>
            <div className="bg-white rounded-[30px] w-[200px] h-[200px] shadow-lg flex flex-col items-center justify-center">
            {/* Mood */}
            <div >
                <div className='font-[700] text-[#373737] mb-10'>Mood</div>
                <div className='flex justify-center' ><img className='w-[60px]' src={mood} alt='mood' /></div>
                <div className='flex justify-between items-center gap-12 pt-3 mt-5'>
                    <p className='text-[#636363] text-[13px]'>Today</p>
                    <p className='text-[#636363] font-[700] text-[14px]'>Okay</p>
                </div>
            </div>
            </div>
            <div className="bg-white rounded-[30px] w-[200px] h-[200px] shadow-lg flex flex-col items-center justify-center">
            {/* Glucose */}
            <div >
                <div className='font-[700] text-[#373737] mb-10'>Glucose</div>
                <div className='flex justify-center' ><img className='w-[60px]' src={glucose} alt='glucose' /></div>
                <div className='flex justify-between items-center gap-10 mt-4'>
                    <p className='text-[#24CDAF] font-[500]'>71bpm</p>
                    <p className='text-[#373737] font-[400]'>Normal</p>
                </div>
                <div>
                    <p className='text-[#636363] text-[13px]'>1 hour ago</p>
                </div>

            </div>
            </div>
            </div>
             </div>
             <div >
                <div className='flex justify-between items-center p-4 w-[100%] mt-4'>
                {/*Symptoms*/}
                    <div>
                    <div className='flex justify-between gap0 items-center '>
                    <h1>Symptoms</h1>
                    <p>1 hour ago</p>
                    </div>
                    <div>
                        <h2>No Symptoms</h2>
                        <button>Track</button>
                    </div>
                    <div>
                        <h2>Upcoming</h2>
                        <button>+</button>
                    </div>
                    <div>Today</div>
                    <div>
                        <img src={symbols} alt='symbols' />
                        <div>
                            <h2>Medication</h2>
                            <div>
                            <ul>
                                <li>Lisinopril</li>
                                <li>Metformin</li>
                            </ul>
                            <ul>
                                <li>10mg</li>
                                <li>500mg</li>                           
                            </ul>
                            <ul>
                                <li>7:30AM</li>
                                <li>6:30PM</li>
                            </ul>
                            </div>
                            <hr />
                            <div>
                                <p>Refil needed soon</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={pressure} alt='symbols' />
                            <h3>Take blood pressure meds</h3>
                            <p>9:00AM</p>
                        </div>
                        <div>
                            <button>Mark as done</button>
                            <button>Snooze</button>
                        </div>
                    </div>
                    <div> 
                    <div>
                        <img src={abnormal} alt='symbols' />
                        <div>
                            <h2>Abnormal heart rate</h2>
                            <p>4:00PM</p>
                        </div>
                       <button>High</button>
                    </div>
                    </div>
                    </div>
                 {/*Progress*/}  
                 
                    <div>
                        <div>
                              <h1>Progress</h1>
                              <p>See all</p>
                        </div>
                        <div>
                        <div>
                            <div>
                                <div>
                                <span>
                                    <img src={heart} alt='heart' />
                                    <h2>Heart Rate</h2>
                                </span>
                                <span>
                                    <p>71bpm</p>
                                </span>
                                </div>
                                <p>Past 7 days</p>
                                <div>
                                <img src={heartprogress} />
                                </div>
                               <div>
                                <p>Heart rate has remained stable over the past week </p>
                               </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                <span>
                                    <img src={glucoseicon} alt='glucoseicon' />
                                    <h2>Glucose</h2>
                                </span>
                                <span>
                                    <p>85mg/dl</p>
                                </span>
                                </div>
                                <p>Past 7 days</p>
                                <div>
                                <img src={glucoselevel} />
                                </div>
                               <div>
                                <p>Blood glucose has remained normal over the past week </p>
                               </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
             </div> 
        {/* Right aside */}
            <div className='bg-[#23ccb2] w-[25%] h-[150vh] p-4 rounded-r-[10px] shadow-lg'>
            <div>
            <div>
                <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-full h-[50px]" />
            </div>
            <div>
                <h1>Paul Dairo</h1>
                <p>36 Years</p>
             </div>   

            </div>
                
            </div>     
            </div>
    </div>
    </>
  )
}

export default Hone