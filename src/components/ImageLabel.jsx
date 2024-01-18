import React from 'react'
import ChipShowcase from './ChipShowcase'

const ImageLabel = ({title, desc1, desc2, chipdesc}) => {
  return (
    <div>
      <div className='px-4 hidden md:block'>
        <div className="flex justify-center flex-col items-center text-center gap-y-1">
          <div className="flex items-center">
            <p className="text-[14px] font-semibold">
              {title}
            </p>
            <div className="">
              <ChipShowcase text={chipdesc} bg='bg-[#8C00CE]' />
            </div>
          </div>
          <div className='text-[#9F9F9F] text-[12px]'>
            <p>{desc1}</p>
            <p>{desc2}</p>
          </div>
        </div>
      </div>
      <div className='px-4 md:hidden'>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[14px] font-semibold">
              {title}
            </p>
            <div className='text-[#9F9F9F] text-[12px]'>
              <p>{desc1}</p>
              <p>{desc2}</p>
          </div>
          </div>
          <ChipShowcase text={chipdesc} bg='bg-[#8C00CE]' />
        </div>
      </div>
    </div>
  )
}

export default ImageLabel