import React from 'react'

const RecentProjects = () => {
  return (
  
      <div className="grid md:grid-cols-2 gap-6 mt-6 ">

  <div className="shadow-lg p-4 rounded-xl hover:shadow-xl">
    <h3 className="font-semibold">Duathlon Event</h3>
    <p className="text-sm text-gray-500">
      Branding & Social Media Design
    </p>
    <button className='border-none w-30 p-3 rounded-sm shadow-sm hover:shadow-lg cursor-pointer'>Check it Now</button>
  </div>

  <div className="shadow-lg p-4 rounded-xl hover:shadow-xl">
    <h3 className="font-semibold">Marathon Event</h3>
    <p className="text-sm text-gray-500">
      Ongoing Design Project
    </p>
    <button className='border-none w-30 p-3 rounded-sm shadow-sm hover:shadow-lg cursor-pointer'>Check it out </button>
  </div>

</div>

  )
}

export default RecentProjects
