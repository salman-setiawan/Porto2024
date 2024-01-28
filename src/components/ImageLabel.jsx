import React from 'react'
import ChipShowcase from './ChipShowcase'

const ImageLabel = ({title, desc1, desc2, chipdesc}) => {
  return (
    <div>
      <div className='px-4 md:hidden'>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[14px] font-semibold">{title}</p>
            <p className='text-[#9F9F9F] text-[12px]'>{desc1}</p>
            <p className='text-[#9F9F9F] text-[12px]'>{desc2}</p>
          </div>
          {chipdesc &&
            <ChipShowcase text={chipdesc} bg='bg-[#30FFFC]' />
          }
        </div>
      </div>
      <div className="flex justify-center">
        <div className='px-4 hidden md:block w-fit'>
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <div className="flex">
              <p className="text-[14px] font-semibold">{title}</p>
              {chipdesc &&
                <ChipShowcase text={chipdesc} bg='bg-[#30FFFC]' />
              }
            </div>
            <div className='flex flex-col w-fit items-center'>
              <p className='text-[#9F9F9F] text-[12px]'>{desc1}</p>
              <p className='text-[#9F9F9F] text-[12px]'>{desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLabel