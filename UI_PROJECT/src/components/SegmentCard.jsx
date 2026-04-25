import React from 'react'
import { ArrowRight } from 'lucide-react'

// SegmentCard renders a single customer segment card using passed data
const SegmentCard = (props) => {
  return (
    // Card container with fixed size and image background
    <div className="h-144 w-76 rounded-4xl overflow-hidden relative shrink-0 space-x-1 ">

      {/* Background image */}
      <img
        className="rounded-4xl h-full w-full object-cover "
        src={props.data.image}
        alt={`card-${props.data.id}`}
      />

      {/* Overlay content positioned above image */}
      <div className="absolute inset-0 flex flex-col justify-between p-10">

        {/* Segment number badge */}
        <h2 className="bg-white w-9.5 h-9.5 rounded-4xl text-2xl flex justify-center items-center">
          {props.data.number}
        </h2>

        <div>

          {/* Description text (multi-line) */}
          <p className="w-60 text-white font-light text-2xl pb-10">
            {props.data.description.map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </p>

          {/* Bottom section: tag + arrow icon */}
          <div className="flex justify-around px-5 py-2 pb-2 space-x-4">

            {/* Category tag */}
            <h3
              className={`${props.data.tagBg} ${props.data.tagText} px-6 py-2 rounded-4xl`}
            >
              {props.data.tag}
            </h3>

            {/* Arrow icon container */}
            <div
              className={`${props.data.arrowBg} ${props.data.arrowText} px-2 py-2 rounded-4xl`}
            >
              <ArrowRight />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SegmentCard