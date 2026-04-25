import React from 'react'
import Header from './Header'
import MainSection from './MainSection'

// CustomerSegmentation acts as the main layout wrapper for the page
const CustomerSegmentation = () => {
  return (
    // Root container providing overall spacing and background
    <div className=' py-4 px-6 min-h-screen w-full bg-white' >

      {/* Top header section */}
      <Header />

      {/* Main content section (text + visual cards) */}
      <MainSection />

    </div>
  )
}

export default CustomerSegmentation