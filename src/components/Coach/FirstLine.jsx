import { FaSearch, FaSlidersH } from "react-icons/fa";
import notification from '../../assets/Dashboard/Coach/notification.png'
import man from '../../assets/Dashboard/man.jpg'

function FirstLine({ value, onChange, placeholder = "Search for health coach", onFilterClick }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center w-full">
      {/* Top: Search and Filter */}
      <div className="flex flex-col gap-3 w-full sm:flex-row sm:items-center sm:gap-4 max-w-3xl">
        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-4 py-2 sm:px-6 sm:py-3 flex-1 shadow">
          <FaSearch className="text-[#23D1B4] text-lg sm:text-2xl mr-3 sm:mr-4" />
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-transparent outline-none border-none text-[#23D1B4] text-base sm:text-[15px] w-full placeholder-[#23D1B4]"
          />
        </div>
        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="bg-white w-12 h-12 sm:w-[50px] sm:h-[45px] flex items-center justify-center rounded-[32px] shadow self-center"
        >
          <FaSlidersH className="text-[#23D1B4] text-xl sm:text-3xl" />
        </button>
      </div>
      {/* Bottom: Date/Notification and User */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 w-full sm:w-auto justify-between">
        <div className='flex items-center gap-2 justify-between'>
          <p className="text-sm sm:text-base">6, May, 2025</p>
          <img src={notification} alt='notification' className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className='flex items-center gap-2 justify-between'>
          <h1 className="font-semibold text-black text-sm sm:text-base">Paul Dairo</h1>
          <img src={man} alt="Placeholder" className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default FirstLine;