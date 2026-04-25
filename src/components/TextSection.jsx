import React from 'react'
import { ArrowUpRight } from 'lucide-react';

// TextSection displays the heading and description for customer segmentation
const TextSection = () => {
  return (
    // Main container for left-side content layout
    <div className='min-h-[80vh] flex flex-col justify-between max-w-105 pr-10 py-10 bg-white'>

      {/* Top content: heading and description */}
      <div>
        <div className='text-7xl font-medium '>
          <h1>Prospective</h1>
          <h1>customer</h1>
          <h1>segmentation</h1>
        </div>

        {/* Description text explaining segmentation */}
        <div className='px-1 py-6 text-gray-500 text-2xl leading-relaxed'>
          Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups
        </div>
      </div>

      {/* Bottom section: directional arrow icon */}
      <div>
        <div className='flex justify-start'>
          <ArrowUpRight className="w-16 h-16 hover:translate-x-1 hover:-translate-y-1 transition" />
        </div>
      </div>

    </div>
  )
}

export default TextSection