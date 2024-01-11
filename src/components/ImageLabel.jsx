import React from 'react'
import Chips from './Chips'

const ImageLabel = ({title, desc1, desc2, chipdesc}) => {
  return (
    <div>
      <div className='px-4 hidden md:block'>
        <div className="flex justify-center flex-col items-center text-center gap-y-1">
          <div className="flex gap-x-2 items-center">
            <p className="text-[18px] font-semibold">
              {title}
            </p>
            <Chips text={chipdesc} bg='violet-500' />
          </div>
          <div className='text-[#9F9F9F] text-[14px]'>
            <p>{desc1}</p>
            <p>{desc2}</p>
          </div>
        </div>
      </div>
      <div className='px-4 md:hidden'>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px] font-semibold">
              {title}
            </p>
            <div className='text-[#9F9F9F] text-[12px]'>
              <p>{desc1}</p>
              <p>{desc2}</p>
          </div>
          </div>
          <Chips text={chipdesc} bg='violet-500' />
        </div>
      </div>
    </div>
  )
}

export default ImageLabel