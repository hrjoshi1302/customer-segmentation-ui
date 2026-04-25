import React from 'react'

// Header displays the top navigation labels for the UI
const Header = () => {
  return (
    // Container for header elements aligned horizontally
    <div className='flex justify-between px-20 py-7'>

      {/* Left label: section title */}
      <h4 className='bg-black text-white px-4 py-2 rounded-3xl tracking-widest text-sm font-light'>
        TARGET AUDIENCE
      </h4>

      {/* Right label: platform type */}
      <button className='bg-gray-100 text-black px-4 py-2 rounded-3xl tracking-normal text-sm font-light'>
        DIGITAL BANKING PLATFORM
      </button>

    </div>
  )
}

export default Header