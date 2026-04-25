import React from 'react'
import SegmentCard from './SegmentCard'
import { SegmentCardData } from '../data/SegmentCardData'

// VisualSection component renders a horizontal list of segment cards
const VisualSection = () => {
return (

// Container for scrollable card layout
<div id="remove_scrollbar" className='min-h-[80vh] w-300 flex bg-white justify-start p-8 px-10 overflow-x-auto gap-12'>

    {/* Mapping through SegmentCardData to dynamically render cards */}
    {SegmentCardData.map((data,index)=>
    (
        // Each card receives its respective data as props
        <SegmentCard  key = {index} data = {data}/>
    ))}
    
</div>

)
}

export default VisualSection





//  <<<<< NOT OPTIMIZED BY PROPS + JSON DATA >>>>>>>



// import React from 'react'
// import { ArrowRight } from 'lucide-react'
// import Rightcontentcard from './rightcontentcard'
// import { cardsData } from './rightcontentcard'

// const Rightcontent = () => {
//   return (

   // <div className=' h-[80vh] w-300 flex bg-white justify-around p-8'>
    //     <div className=' h-160 w-76 rounded-4xl overflow-hidden relative'>

    //          <img className='rounded-4xl h-full w-full object-cover' src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
             
    //          <div className=' absolute inset-0 flex flex-col justify-between p-10 '>
    //                 <h2 className='bg-white w-9.5 h-9.5 rounded-4xl text-2xl flex justify-center items-center' >1</h2>

    //                 <div>
    //                 <p className=' w-60 text-white font-light text-2xl pb-10'>
    //                     Prime customers, <br></br>that have access <br></br>to bank credit <br></br>and are satisfied <br></br>with the current <br></br>product
    //                 </p>

    //                 <div className='flex justify-around px-5 py-2 pb-2 space-x-4'>
 
    //                     <h3 className='text-white bg-indigo-400 px-6 py-2 rounded-4xl pl-7'>Satisfied</h3>
                        
    //                     <i className='text-white bg-indigo-400 px-2 py-2 rounded-4xl '>
    //                        <ArrowRight />
    //                     </i>
    //                 </div>
    //                 </div>
    //          </div>
    //     </div>

    //     <div className=' h-160 w-76  rounded-4xl overflow-hidden relative'>

    //         <img className='rounded-4xl h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" />
            
    //         <div className=' absolute inset-0 flex flex-col justify-between p-10'>
    //                 <h2 className='bg-white w-9.5 h-9.5 rounded-4xl text-2xl  flex justify-center items-center' >2</h2>

    //                 <div>
    //                 <p className=' w-60 text-white font-light text-2xl pb-10'>
    //                     Prime customers, <br></br>that have access <br></br>to bank credit <br></br>and are not satisfied <br></br>with the current <br></br>service
    //                 </p>

    //                 <div className='flex justify-around px-5 py-2 pb-2 space-x-4'>
 
    //                     <h3 className='text-white bg-indigo-400  px-6 py-2 rounded-4xl pl-7'>Underserved</h3>
                        
    //                     <i className='text-white bg-indigo-400 px-2 py-2 rounded-4xl '>
    //                        <ArrowRight />
    //                     </i>
    //                 </div>
    //                 </div>
    //          </div>
    //     </div>

    //     <div className=' h-160 w-76  rounded-4xl overflow-hidden relative'>
    //         <img className='rounded-4xl h-full w-full object-cover' src="http://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img3" />
            
    //         <div className=' absolute inset-0 flex flex-col justify-between p-10 '>
    //                 <h2 className='bg-white w-9.5 h-9.5 rounded-4xl text-2xl  flex justify-center items-center' >3</h2>

    //                 <div>
    //                 <p className=' w-60 text-white font-light text-2xl pb-10'>
    //                     Customers <br></br>from near-prime <br></br>and sub-prime <br></br>segments with no <br></br>access to bank <br></br>credit
    //                 </p>

    //                 <div className='flex justify-around px-5 py-2 pb-2 space-x-4'>
 
    //                     <h3 className='text-black bg-lime-500 px-6 py-2 rounded-4xl pl-7'>Underserved</h3>
                        
    //                     <i className='text-black bg-lime-500 px-2 py-2 rounded-4xl '>
    //                        <ArrowRight />
    //                     </i>
    //                 </div>
    //                 </div>
    //          </div>
    //     </div>
    // </div>


//   )
// }

// export default Rightcontent