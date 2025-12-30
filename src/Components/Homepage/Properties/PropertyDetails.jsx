import React from 'react'
import PropertyLeft from './PropertyLeft'
import PropertyRight from './PropertyRight'

const PropertyDetails = () => {
  return (
    <div>
       <div className='max-w-[1368px] h-auto mx-auto flex  gap-[40px]'>
        <div className='w-[901px] h-[auto]'>
           <PropertyLeft/>

        </div>
        <div className='w-[435px] h-[auto]'>
            <PropertyRight/>

        </div>

       </div>
      
    </div>
  )
}

export default PropertyDetails
