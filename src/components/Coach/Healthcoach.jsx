import React from 'react'
import { FaStar } from "react-icons/fa";

const Healthcoach = (props) => {
  return (
    <div className=''>
       <div className="bg-[#eaf7f6] rounded-2xl p-6 m-3 flex flex-col items-center w-[220px] shadow-md">
        <img src={props.image} alt="Health Coach" className="w-16 ml-[20px] h-16 rounded-full" />
        <h2 className="text-[16px] font-bold mt-4">{props.name}</h2>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < props.rating ? "text-[#F6B545] text-xl" : "text-gray-300 text-xl"}
            />
          ))}
        </div>
        <button className="bg-[#24CDAF] text-white p-[10px] mt-3 w-[100%] rounded-full">
          {props.buttonText}
        </button>
       </div>
    </div>
  )
}

export default Healthcoach