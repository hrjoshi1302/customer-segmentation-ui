import React from 'react'
import TextSection from './TextSection'
import VisualSection from './VisualSection'

// MainSection arranges the layout into left (text) and right (visual cards)
const MainSection = () => {
  return (
    // Container that holds both sections side by side
    <section className='min-h-[80vh] flex justify-between px-20 py-3 bg-white gap-10'>

      {/* Left side: heading and description */}
      <TextSection />

      {/* Right side: scrollable segment cards */}
      <VisualSection />

    </section>
  )
}

export default MainSection