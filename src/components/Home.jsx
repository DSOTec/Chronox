import React from 'react';
import { MdHome, MdFavorite, MdPerson, MdMedicalServices, MdSettings } from 'react-icons/md';

function Home() {
  return (
    <div className="flex flex-col h-screen bg-teal-50 p-4">
      <header className="flex items-center justify-between bg-white rounded-2xl shadow p-6 mb-8 w-full max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Good Morning Paul</h1>
          <p className="text-gray-500">Your wellness at a glance</p>
        </div>
        <button className="bg-[#23ccb2] text-white px-6 py-2 rounded-full font-semibold">Upgrade to Premium</button>
        <div>
          {/* Notification icon here, e.g. <MdNotifications size={28} className="text-gray-400" /> */}
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-[100px] h-full bg-[#23ccb2] rounded-tl-[60px] rounded-bl-[60px] flex flex-col items-center py-8 justify-between">
          <div>
            <img src="logo.png" alt="Logo" className="w-14 h-14 mb-8" />
            <nav>
              <ul className="flex flex-col gap-12">
                {/* Home (active) */}
                <li className="flex flex-col items-center">
                  <MdHome size={40} className="text-white" />
                  <span className="text-white font-medium mt-2">Home</span>
                  <span className="w-2 h-2 bg-white rounded-full mt-1"></span>
                </li>
                {/* Health */}
                <li className="flex flex-col items-center">
                  <MdFavorite size={40} className="text-gray-200" />
                  <span className="text-gray-200 font-medium mt-2">Health</span>
                </li>
                {/* Coach */}
                <li className="flex flex-col items-center">
                  <MdPerson size={40} className="text-gray-200" />
                  <span className="text-gray-200 font-medium mt-2">Coach</span>
                </li>
                {/* Specialist */}
                <li className="flex flex-col items-center">
                  <MdMedicalServices size={40} className="text-gray-200" />
                  <span className="text-gray-200 font-medium mt-2">Specialist</span>
                </li>
                {/* Settings */}
                <li className="flex flex-col items-center">
                  <MdSettings size={40} className="text-gray-200" />
                  <span className="text-gray-200 font-medium mt-2">Settings</span>
                </li>
              </ul>
            </nav>
          </div>
          <button className="bg-white p-3 rounded-full shadow">
            {/* Logout or other icon */}
          </button>
        </aside>

        <main className="flex-1 grid grid-cols-3 gap-8">
          <section className="col-span-2">
            <div className="flex flex-1">
              <section className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h2>Health Metrics</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-red-50 p-2 rounded">
                      <p>Heart Rate</p>
                      <p className="text-xl font-bold">71 bpm</p>
                      <p className="text-sm text-gray-500">Normal</p>
                      <p className="text-sm text-gray-500">1 hour ago</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p>Take Medication</p>
                      <p className="text-xl font-bold">Metformin</p>
                      <p className="text-sm text-gray-500">8:00 AM</p>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded">
                      <p>Mood</p>
                      <p className="text-xl font-bold">😊</p>
                      <p className="text-sm text-gray-500">Today</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p>Glucose</p>
                      <p className="text-xl font-bold">80mg/dl</p>
                      <p className="text-sm text-gray-500">Normal</p>
                      <p className="text-sm text-gray-500">7:52 AM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h2>Symptoms</h2>
                  <p>No Symptoms</p>
                  <button className="bg-green-500 text-white px-2 py-1 rounded">Track</button>
                  <h2>Upcoming</h2>
                  <p>Today</p>
                  <div>
                    <p>Medication</p>
                    <ul>
                      <li>Lisinopril 10mg 7:30 AM</li>
                      <li>Metformin 500mg 6:00 PM</li>
                    </ul>
                    <p className="text-red-500">Refill needed soon</p>
                    <button className="bg-green-500 text-white px-2 py-1 rounded">Take blood pressure meds 9:00 AM</button>
                    <button className="bg-gray-300 text-black px-2 py-1 rounded ml-2">Mark as done</button>
                    <button className="bg-gray-300 text-black px-2 py-1 rounded ml-2">Snooze</button>
                    <p>Abnormal heart rate</p>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">High</button>
                    <p className="text-sm text-gray-500">4:00 PM</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h2>Progress</h2>
                  <div className="bg-red-50 p-2 rounded">
                    <p>Heart Rate</p>
                    <p className="text-xl font-bold">75 bpm</p>
                    <p>Past 7 days</p>
                    <div className="h-32 flex items-end">
                      <div className="bg-red-300 w-1/7 h-3/4 mr-1"></div>
                      <div className="bg-red-300 w-1/7 h-1/2 mr-1"></div>
                      <div className="bg-red-300 w-1/7 h-2/3 mr-1"></div>
                      <div className="bg-red-300 w-1/7 h-3/5 mr-1"></div>
                      <div className="bg-red-300 w-1/7 h-4/5 mr-1"></div>
                      <div className="bg-red-300 w-1/7 h-1/2 mr-1"></div>
                      <div className="bg-red-300 w-1/7 h-3/4"></div>
                    </div>
                    <p>Heart rate has remained stable over the past week</p>
                  </div>
                  <div className="bg-red-50 p-2 rounded mt-2">
                    <p>Glucose</p>
                    <p className="text-xl font-bold">85mg/dl</p>
                    <p>Past 7 days</p>
                    <div className="h-32 flex items-end">
                      <div className="bg-blue-300 w-1/7 h-1/2 mr-1"></div>
                      <div className="bg-blue-300 w-1/7 h-2/3 mr-1"></div>
                      <div className="bg-blue-300 w-1/7 h-3/5 mr-1"></div>
                      <div className="bg-blue-300 w-1/7 h-4/5 mr-1"></div>
                      <div className="bg-blue-300 w-1/7 h-1/2 mr-1"></div>
                      <div className="bg-blue-300 w-1/7 h-2/3 mr-1"></div>
                      <div className="bg-blue-300 w-1/7 h-1/2"></div>
                    </div>
                    <p>Blood glucose has remained normal over the past week</p>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <aside className="bg-[#c6f2ec] rounded-2xl p-6 flex flex-col gap-6">
            {/* Profile, My Conditions, Activity, Appointments, Health Tips */}
            <div className="bg-white p-4 rounded-lg">
              <h2>Profile</h2>
              <p>Name: Paul</p>
              <p>Age: 54</p>
              <p>Weight: 180 lbs</p>
              <p>Height: 5'10"</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h2>My Conditions</h2>
              <div className="flex space-x-2">
                <button className="bg-gray-200 px-2 py-1 rounded">Diabetes</button>
                <button className="bg-gray-200 px-2 py-1 rounded">Hypertension</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">+</button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h2>Your Activity</h2>
              <div>
                <p>Yoga</p>
                <div className="bg-gray-200 h-2 rounded">
                  <div className="bg-green-500 h-2 rounded" style={{width: '50%'}}></div>
                </div>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h2>Appointments</h2>
              <div>
                <p>Dr. Mark Odoma</p>
                <p className="text-green-500">Health Coach</p>
                <p>Today at 11:00 AM</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h2>Apple Health</h2>
              <p>Last synced</p>
              <p className="text-green-500">Today at 6:15 AM</p>
              <button className="bg-gray-300 text-black px-2 py-1 rounded mt-2">Refresh</button>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h2>Health Tips</h2>
              <div className="bg-gray-200 p-2 rounded">
                <p>Why staying hydrated is important</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default Home;